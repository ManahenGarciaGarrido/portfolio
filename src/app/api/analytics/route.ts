import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

// GET - Get analytics for current user
export async function GET(request: NextRequest) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  // Only pro users get full analytics
  if (!user.isPro) {
    // Basic analytics for free users
    const totalViews = await prisma.pageView.count({
      where: { userId: user.id },
    });

    const totalClicks = await prisma.click.count({
      where: {
        link: { userId: user.id },
      },
    });

    return NextResponse.json({
      analytics: {
        totalViews,
        totalClicks,
        isPro: false,
      },
    });
  }

  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '7d';

  // Calculate date range
  const now = new Date();
  let startDate: Date;
  switch (period) {
    case '30d':
      startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      break;
    case '90d':
      startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
      break;
    case '1y':
      startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
      break;
    default:
      startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  }

  // Get total counts
  const [totalViews, totalClicks, periodViews, periodClicks] = await Promise.all([
    prisma.pageView.count({ where: { userId: user.id } }),
    prisma.click.count({ where: { link: { userId: user.id } } }),
    prisma.pageView.count({
      where: { userId: user.id, createdAt: { gte: startDate } },
    }),
    prisma.click.count({
      where: { link: { userId: user.id }, createdAt: { gte: startDate } },
    }),
  ]);

  // Get views by day
  const viewsByDay = await prisma.pageView.groupBy({
    by: ['createdAt'],
    where: { userId: user.id, createdAt: { gte: startDate } },
    _count: true,
  });

  // Get clicks by day
  const clicksByDay = await prisma.click.groupBy({
    by: ['createdAt'],
    where: { link: { userId: user.id }, createdAt: { gte: startDate } },
    _count: true,
  });

  // Get device breakdown
  const deviceBreakdown = await prisma.pageView.groupBy({
    by: ['device'],
    where: { userId: user.id, createdAt: { gte: startDate } },
    _count: true,
  });

  // Get top links
  const links = await prisma.link.findMany({
    where: { userId: user.id },
    include: {
      _count: {
        select: { clicks: true },
      },
    },
    orderBy: {
      clicks: {
        _count: 'desc',
      },
    },
    take: 10,
  });

  return NextResponse.json({
    analytics: {
      totalViews,
      totalClicks,
      periodViews,
      periodClicks,
      period,
      isPro: true,
      devices: deviceBreakdown.map((d) => ({
        device: d.device || 'unknown',
        count: d._count,
      })),
      topLinks: links.map((l) => ({
        id: l.id,
        title: l.title,
        clicks: l._count.clicks,
      })),
    },
  });
}
