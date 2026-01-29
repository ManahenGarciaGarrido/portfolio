import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

// GET - Get current user
export async function GET() {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  return NextResponse.json({ user });
}

// PUT - Update user profile
export async function PUT(request: NextRequest) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  const { displayName, bio, theme } = await request.json();

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      ...(displayName !== undefined && { displayName }),
      ...(bio !== undefined && { bio }),
      ...(theme !== undefined && { theme }),
    },
  });

  return NextResponse.json({
    user: {
      id: updatedUser.id,
      displayName: updatedUser.displayName,
      bio: updatedUser.bio,
      theme: updatedUser.theme,
    },
  });
}
