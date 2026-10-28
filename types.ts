import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface TestimonialItem {
  name: string;
  event: string;
  quote: string;
}