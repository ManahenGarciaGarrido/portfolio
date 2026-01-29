import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

// GET - Get all links for current user
export async function GET() {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  const links = await prisma.link.findMany({
    where: { userId: user.id },
    orderBy: { order: 'asc' },
    include: {
      _count: {
        select: { clicks: true },
      },
    },
  });

  return NextResponse.json({
    links: links.map((link) => ({
      id: link.id,
      title: link.title,
      url: link.url,
      enabled: link.enabled,
      order: link.order,
      clicks: link._count.clicks,
    })),
  });
}

// POST - Create new link
export async function POST(request: NextRequest) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  const { title, url } = await request.json();

  if (!title || !url) {
    return NextResponse.json(
      { error: 'Título y URL son requeridos' },
      { status: 400 }
    );
  }

  // Check link limit for free users
  const linkCount = await prisma.link.count({
    where: { userId: user.id },
  });

  const limits: Record<string, number> = {
    free: 5,
    starter: 15,
    pro: 999999,
    business: 999999,
    enterprise: 999999,
  };

  const maxLinks = limits[user.plan] || 5;

  if (linkCount >= maxLinks) {
    return NextResponse.json(
      { error: `Has alcanzado el límite de ${maxLinks} links. Actualiza tu plan para añadir más.` },
      { status: 403 }
    );
  }

  // Get max order
  const maxOrder = await prisma.link.aggregate({
    where: { userId: user.id },
    _max: { order: true },
  });

  const link = await prisma.link.create({
    data: {
      title,
      url,
      userId: user.id,
      order: (maxOrder._max.order || 0) + 1,
    },
  });

  return NextResponse.json({
    link: {
      id: link.id,
      title: link.title,
      url: link.url,
      enabled: link.enabled,
      order: link.order,
      clicks: 0,
    },
  });
}

// PUT - Update link
export async function PUT(request: NextRequest) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  const { id, title, url, enabled } = await request.json();

  if (!id) {
    return NextResponse.json({ error: 'ID es requerido' }, { status: 400 });
  }

  // Verify ownership
  const existingLink = await prisma.link.findFirst({
    where: { id, userId: user.id },
  });

  if (!existingLink) {
    return NextResponse.json({ error: 'Link no encontrado' }, { status: 404 });
  }

  const link = await prisma.link.update({
    where: { id },
    data: {
      ...(title !== undefined && { title }),
      ...(url !== undefined && { url }),
      ...(enabled !== undefined && { enabled }),
    },
    include: {
      _count: {
        select: { clicks: true },
      },
    },
  });

  return NextResponse.json({
    link: {
      id: link.id,
      title: link.title,
      url: link.url,
      enabled: link.enabled,
      order: link.order,
      clicks: link._count.clicks,
    },
  });
}

// DELETE - Delete link
export async function DELETE(request: NextRequest) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID es requerido' }, { status: 400 });
  }

  // Verify ownership
  const existingLink = await prisma.link.findFirst({
    where: { id, userId: user.id },
  });

  if (!existingLink) {
    return NextResponse.json({ error: 'Link no encontrado' }, { status: 404 });
  }

  await prisma.link.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
