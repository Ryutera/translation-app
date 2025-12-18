import Stripe from 'stripe';

const apiKey = process.env.STRIPE_SECRET_KEY;

if (!apiKey && process.env.NODE_ENV === 'production') {
  
  console.warn("STRIPE_SECRET_KEY is missing in production environment.");
}

export const stripe = new Stripe(apiKey || '', {
  
  apiVersion: '2025-11-17.clover', 
  typescript: true,
});