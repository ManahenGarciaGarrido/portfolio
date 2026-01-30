import { create } from 'zustand';
import { UserProfile, Link, ThemeId, Analytics } from '@/types';

interface UserState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Auth actions
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, username: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;

  // Profile actions
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  setTheme: (theme: ThemeId) => Promise<void>;

  // Link actions
  addLink: (title: string, url: string) => Promise<boolean>;
  updateLink: (id: string, updates: Partial<Link>) => Promise<void>;
  deleteLink: (id: string) => Promise<void>;
  toggleLink: (id: string) => Promise<void>;

  // Pro actions (redirect to upgrade page)
  upgradeToPro: () => void;

  // Clear error
  clearError: () => void;
}

export const useUserStore = create<UserState>()((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  clearError: () => set({ error: null }),

  checkAuth: async () => {
    try {
      set({ isLoading: true });
      const res = await fetch('/api/auth/me');

      if (res.ok) {
        const data = await res.json();
        set({ user: data.user, isAuthenticated: true, isLoading: false });
      } else {
        set({ user: null, isAuthenticated: false, isLoading: false });
      }
    } catch {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        set({ isLoading: false, error: data.error });
        return false;
      }

      // Fetch full user data
      await get().checkAuth();
      return true;
    } catch {
      set({ isLoading: false, error: 'Error de conexión' });
      return false;
    }
  },

  register: async (email: string, password: string, username: string) => {
    set({ isLoading: true, error: null });

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username, displayName: username }),
      });

      const data = await res.json();

      if (!res.ok) {
        set({ isLoading: false, error: data.error });
        return false;
      }

      // Fetch full user data
      await get().checkAuth();
      return true;
    } catch {
      set({ isLoading: false, error: 'Error de conexión' });
      return false;
    }
  },

  logout: async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } finally {
      set({ user: null, isAuthenticated: false });
    }
  },

  updateProfile: async (updates: Partial<UserProfile>) => {
    const { user } = get();
    if (!user) return;

    // Optimistic update
    set({ user: { ...user, ...updates } });

    try {
      const res = await fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });

      if (!res.ok) {
        // Revert on error
        await get().checkAuth();
      }
    } catch {
      // Revert on error
      await get().checkAuth();
    }
  },

  setTheme: async (theme: ThemeId) => {
    await get().updateProfile({ theme });
  },

  addLink: async (title: string, url: string) => {
    const { user } = get();
    if (!user) return false;

    set({ error: null });

    try {
      const res = await fetch('/api/links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          url: url.startsWith('http') ? url : `https://${url}`
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        set({ error: data.error });
        return false;
      }

      // Add new link to state
      set({
        user: {
          ...user,
          links: [...user.links, data.link]
        }
      });
      return true;
    } catch {
      set({ error: 'Error al añadir link' });
      return false;
    }
  },

  updateLink: async (id: string, updates: Partial<Link>) => {
    const { user } = get();
    if (!user) return;

    // Optimistic update
    const updatedLinks = user.links.map((link) =>
      link.id === id ? { ...link, ...updates } : link
    );
    set({ user: { ...user, links: updatedLinks } });

    try {
      const res = await fetch('/api/links', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updates }),
      });

      if (!res.ok) {
        // Revert on error
        await get().checkAuth();
      }
    } catch {
      // Revert on error
      await get().checkAuth();
    }
  },

  deleteLink: async (id: string) => {
    const { user } = get();
    if (!user) return;

    // Optimistic update
    set({ user: { ...user, links: user.links.filter((link) => link.id !== id) } });

    try {
      const res = await fetch(`/api/links?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        // Revert on error
        await get().checkAuth();
      }
    } catch {
      // Revert on error
      await get().checkAuth();
    }
  },

  toggleLink: async (id: string) => {
    const { user } = get();
    if (!user) return;

    const link = user.links.find((l) => l.id === id);
    if (!link) return;

    await get().updateLink(id, { enabled: !link.enabled });
  },

  upgradeToPro: () => {
    // Redirect handled in UI
  },
}));

// Helper function to get public profile (used in profile page)
export async function getPublicProfile(username: string) {
  try {
    const res = await fetch(`/api/profile/${username}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.profile;
  } catch {
    return null;
  }
}

// Helper function to record link click
export async function recordLinkClick(username: string, linkId: string) {
  try {
    await fetch(`/api/profile/${username}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ linkId }),
    });
  } catch {
    // Silently fail
  }
}
