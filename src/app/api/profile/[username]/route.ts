import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET - Get public profile by username
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;

  const user = await prisma.user.findUnique({
    where: { username: username.toLowerCase() },
    select: {
      id: true,
      username: true,
      displayName: true,
      bio: true,
      avatar: true,
      theme: true,
      links: {
        where: { enabled: true },
        orderBy: { order: 'asc' },
        select: {
          id: true,
          title: true,
          url: true,
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
  }

  // Record page view
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /mobile/i.test(userAgent);
  const isTablet = /tablet|ipad/i.test(userAgent);
  const device = isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';

  await prisma.pageView.create({
    data: {
      userId: user.id,
      device,
      referrer: request.headers.get('referer'),
    },
  });

  return NextResponse.json({
    profile: {
      username: user.username,
      displayName: user.displayName,
      bio: user.bio,
      avatar: user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`,
      theme: user.theme,
      links: user.links,
    },
  });
}

// POST - Record link click
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;
  const { linkId } = await request.json();

  const user = await prisma.user.findUnique({
    where: { username: username.toLowerCase() },
    select: { id: true },
  });

  if (!user) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
  }

  // Verify link belongs to user
  const link = await prisma.link.findFirst({
    where: { id: linkId, userId: user.id },
  });

  if (!link) {
    return NextResponse.json({ error: 'Link no encontrado' }, { status: 404 });
  }

  // Record click
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /mobile/i.test(userAgent);
  const isTablet = /tablet|ipad/i.test(userAgent);
  const device = isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';

  await prisma.click.create({
    data: {
      linkId,
      device,
      referrer: request.headers.get('referer'),
    },
  });

  return NextResponse.json({ success: true });
}
