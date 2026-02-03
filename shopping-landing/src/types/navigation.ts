export interface NavigationItem {
  id: string;
  label: string;
  link: string;
  order: number;
  children?: NavigationItem[];
}

export type FooterSection = 'about' | 'support' | 'legal' | 'social';

export interface FooterLink {
  id: string;
  label: string;
  url: string;
  section: FooterSection;
}
