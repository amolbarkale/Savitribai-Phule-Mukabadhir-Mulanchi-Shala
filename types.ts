import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  id: string;
}

export interface Feature {
  title: string;
  icon: LucideIcon;
  description?: string;
}

export interface ManagementProfile {
  name: string;
  role: string; // Marathi role
  imageUrl: string;
  message?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}