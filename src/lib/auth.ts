import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import prisma from './prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'linkforge-secret-key-change-in-production';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;

  if (!token) {
    return null;
  }

  const payload = verifyToken(token);
  if (!payload) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    include: {
      links: {
        orderBy: { order: 'asc' },
        include: {
          _count: {
            select: { clicks: true },
          },
        },
      },
      _count: {
        select: {
          pageViews: true,
        },
      },
    },
  });

  if (!user) {
    return null;
  }

  // Transform to match expected format
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    displayName: user.displayName,
    bio: user.bio,
    avatar: user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`,
    theme: user.theme,
    isPro: user.plan !== 'free',
    plan: user.plan,
    links: user.links.map((link) => ({
      id: link.id,
      title: link.title,
      url: link.url,
      enabled: link.enabled,
      order: link.order,
      clicks: link._count.clicks,
    })),
    analytics: {
      totalViews: user._count.pageViews,
      totalClicks: user.links.reduce((acc, link) => acc + link._count.clicks, 0),
    },
    createdAt: user.createdAt.toISOString(),
  };
}

export type AuthUser = Awaited<ReturnType<typeof getCurrentUser>>;
