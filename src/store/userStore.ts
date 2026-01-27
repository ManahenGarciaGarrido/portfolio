import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { UserProfile, Link, ThemeId, Analytics } from '@/types';

interface UserState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Auth actions
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, username: string) => Promise<boolean>;
  logout: () => void;

  // Profile actions
  updateProfile: (updates: Partial<UserProfile>) => void;
  setTheme: (theme: ThemeId) => void;

  // Link actions
  addLink: (title: string, url: string) => boolean;
  updateLink: (id: string, updates: Partial<Link>) => void;
  deleteLink: (id: string) => void;
  reorderLinks: (links: Link[]) => void;
  toggleLink: (id: string) => void;

  // Pro actions
  upgradeToPro: () => void;
  downgradeFromPro: () => void;

  // Analytics
  incrementViews: (username: string) => void;
  incrementClicks: (linkId: string) => void;
}

const MAX_FREE_LINKS = 5;

const createEmptyAnalytics = (): Analytics => ({
  totalViews: 0,
  totalClicks: 0,
  viewsByDay: [],
  clicksByLink: [],
});

const createDefaultUser = (email: string, username: string): UserProfile => ({
  id: uuidv4(),
  username: username.toLowerCase().replace(/[^a-z0-9]/g, ''),
  email,
  displayName: username,
  bio: '',
  avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${username}`,
  theme: 'minimal-light',
  links: [],
  isPro: false,
  createdAt: new Date(),
  analytics: createEmptyAnalytics(),
});

// Simulated user database for demo (localStorage)
const getUsersDB = (): Record<string, { user: UserProfile; password: string }> => {
  if (typeof window === 'undefined') return {};
  const data = localStorage.getItem('linkforge-users-db');
  return data ? JSON.parse(data) : {};
};

const saveUsersDB = (db: Record<string, { user: UserProfile; password: string }>) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('linkforge-users-db', JSON.stringify(db));
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        await new Promise((r) => setTimeout(r, 500)); // Simulate API call

        const db = getUsersDB();
        const userEntry = Object.values(db).find(
          (entry) => entry.user.email === email && entry.password === password
        );

        if (userEntry) {
          set({ user: userEntry.user, isAuthenticated: true, isLoading: false });
          return true;
        }

        set({ isLoading: false });
        return false;
      },

      register: async (email: string, password: string, username: string) => {
        set({ isLoading: true });
        await new Promise((r) => setTimeout(r, 500)); // Simulate API call

        const db = getUsersDB();
        const normalizedUsername = username.toLowerCase().replace(/[^a-z0-9]/g, '');

        // Check if email or username already exists
        const exists = Object.values(db).some(
          (entry) =>
            entry.user.email === email || entry.user.username === normalizedUsername
        );

        if (exists) {
          set({ isLoading: false });
          return false;
        }

        const newUser = createDefaultUser(email, username);
        db[newUser.id] = { user: newUser, password };
        saveUsersDB(db);

        set({ user: newUser, isAuthenticated: true, isLoading: false });
        return true;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateProfile: (updates: Partial<UserProfile>) => {
        const { user } = get();
        if (!user) return;

        const updatedUser = { ...user, ...updates };
        set({ user: updatedUser });

        // Also update in DB
        const db = getUsersDB();
        if (db[user.id]) {
          db[user.id].user = updatedUser;
          saveUsersDB(db);
        }
      },

      setTheme: (theme: ThemeId) => {
        get().updateProfile({ theme });
      },

      addLink: (title: string, url: string) => {
        const { user } = get();
        if (!user) return false;

        if (!user.isPro && user.links.length >= MAX_FREE_LINKS) {
          return false;
        }

        const newLink: Link = {
          id: uuidv4(),
          title,
          url: url.startsWith('http') ? url : `https://${url}`,
          clicks: 0,
          enabled: true,
          createdAt: new Date(),
        };

        get().updateProfile({ links: [...user.links, newLink] });
        return true;
      },

      updateLink: (id: string, updates: Partial<Link>) => {
        const { user } = get();
        if (!user) return;

        const updatedLinks = user.links.map((link) =>
          link.id === id ? { ...link, ...updates } : link
        );
        get().updateProfile({ links: updatedLinks });
      },

      deleteLink: (id: string) => {
        const { user } = get();
        if (!user) return;

        get().updateProfile({ links: user.links.filter((link) => link.id !== id) });
      },

      reorderLinks: (links: Link[]) => {
        get().updateProfile({ links });
      },

      toggleLink: (id: string) => {
        const { user } = get();
        if (!user) return;

        const updatedLinks = user.links.map((link) =>
          link.id === id ? { ...link, enabled: !link.enabled } : link
        );
        get().updateProfile({ links: updatedLinks });
      },

      upgradeToPro: () => {
        get().updateProfile({ isPro: true });
      },

      downgradeFromPro: () => {
        get().updateProfile({ isPro: false });
      },

      incrementViews: (username: string) => {
        const db = getUsersDB();
        const userEntry = Object.values(db).find(
          (entry) => entry.user.username === username
        );
        if (!userEntry) return;

        const today = new Date().toISOString().split('T')[0];
        const analytics = userEntry.user.analytics || createEmptyAnalytics();

        analytics.totalViews += 1;

        const todayEntry = analytics.viewsByDay.find((v) => v.date === today);
        if (todayEntry) {
          todayEntry.views += 1;
        } else {
          analytics.viewsByDay.push({ date: today, views: 1 });
        }

        // Keep only last 30 days
        analytics.viewsByDay = analytics.viewsByDay.slice(-30);

        userEntry.user.analytics = analytics;
        db[userEntry.user.id] = userEntry;
        saveUsersDB(db);

        // Update current user if it's the same
        const { user } = get();
        if (user && user.username === username) {
          set({ user: { ...user, analytics } });
        }
      },

      incrementClicks: (linkId: string) => {
        const { user } = get();
        if (!user) return;

        const analytics = user.analytics || createEmptyAnalytics();
        analytics.totalClicks += 1;

        const clickEntry = analytics.clicksByLink.find((c) => c.linkId === linkId);
        if (clickEntry) {
          clickEntry.clicks += 1;
        } else {
          analytics.clicksByLink.push({ linkId, clicks: 1 });
        }

        // Also update link's own click count
        const updatedLinks = user.links.map((link) =>
          link.id === linkId ? { ...link, clicks: link.clicks + 1 } : link
        );

        const updatedUser = { ...user, analytics, links: updatedLinks };
        set({ user: updatedUser });

        // Update in DB
        const db = getUsersDB();
        if (db[user.id]) {
          db[user.id].user = updatedUser;
          saveUsersDB(db);
        }
      },
    }),
    {
      name: 'linkforge-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

// Helper to get public profile (for profile pages)
export const getPublicProfile = (username: string): UserProfile | null => {
  if (typeof window === 'undefined') return null;
  const db = getUsersDB();
  const userEntry = Object.values(db).find(
    (entry) => entry.user.username === username.toLowerCase()
  );
  return userEntry?.user || null;
};
