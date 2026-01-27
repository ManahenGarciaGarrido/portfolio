import { NextRequest, NextResponse } from 'next/server';

// Stripe webhook endpoint
// This handles subscription events from Stripe

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    // Check if Stripe is configured
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!stripeSecretKey || !webhookSecret) {
      console.log('Stripe not configured, skipping webhook');
      return NextResponse.json({ received: true, demo: true });
    }

    // In production, you would verify and handle the webhook here:
    /*
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2023-10-16',
    });

    let event;

    try {
      event = stripe.webhooks.constructEvent(body, signature!, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const userId = session.metadata?.userId;

        // Update user to Pro in your database
        // await updateUserToPro(userId);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        // Downgrade user from Pro
        // await downgradeUser(subscription.metadata.userId);
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        // Handle subscription updates (upgrades/downgrades)
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        // Handle failed payment
        // Send email to user, etc.
        break;
      }
    }
    */

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
