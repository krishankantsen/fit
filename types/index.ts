export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image_url: string;
  order_index: number;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  detailed_description: string;
  icon: string;
  order_index: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  detailed_description: string;
  category_id: string;
  services: string[];
  location: string;
  client_name: string;
  completion_date: string;
  project_size: string;
  team_leads: string[];
  image_urls: string[];
  featured: boolean;
  challenges_solutions: {
    challenges: string[];
    solutions: string[];
  };
  metrics: Record<string, string | number>;
  order_index: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  image_url: string;
  email: string;
  order_index: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author_name: string;
  featured_image_url: string;
  published_date: string;
  updated_date: string;
  status: string;
  order_index: number;
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone?: string;
  inquiry_type: string;
  category?: string;
  service?: string;
  message: string;
}
