export interface Link {
  id: string;
  title: string;
  url: string;
  icon?: string;
  clicks: number;
  enabled: boolean;
  createdAt: Date;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName: string;
  bio: string;
  avatar: string;
  theme: ThemeId;
  links: Link[];
  isPro: boolean;
  createdAt: Date;
  analytics: Analytics;
}

export interface Analytics {
  totalViews: number;
  totalClicks: number;
  viewsByDay: { date: string; views: number }[];
  clicksByLink: { linkId: string; clicks: number }[];
}

export type ThemeId =
  | 'minimal-light'
  | 'minimal-dark'
  | 'gradient-sunset'
  | 'gradient-ocean'
  | 'gradient-forest'
  | 'neon-pink'
  | 'neon-blue'
  | 'neon-green'
  | 'glassmorphism'
  | 'brutalist'
  | 'retro-wave'
  | 'pastel-dream'
  | 'dark-elegant'
  | 'nature-earth'
  | 'cyberpunk'
  | 'minimalist-mono'
  | 'warm-autumn'
  | 'cool-winter'
  | 'spring-bloom'
  | 'summer-vibes';

export interface Theme {
  id: ThemeId;
  name: string;
  isPro: boolean;
  background: string;
  cardBg: string;
  textColor: string;
  buttonBg: string;
  buttonText: string;
  buttonHover: string;
  accentColor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  highlighted?: boolean;
  stripePriceId?: string;
}
