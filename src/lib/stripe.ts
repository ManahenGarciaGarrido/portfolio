import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      console.warn('Stripe publishable key not configured');
      return Promise.resolve(null);
    }
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

// Price IDs - Configure these in your Stripe dashboard
export const STRIPE_PRICES = {
  pro_monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY || 'price_monthly',
  pro_yearly: process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY || 'price_yearly',
};

export const createCheckoutSession = async (priceId: string, userId: string) => {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        userId,
      }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};
