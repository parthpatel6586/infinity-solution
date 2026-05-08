export interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  client?: string;
  year?: number;
  images: string[];
  featuredImage?: string;
  technologies: string[];
  results: string[];
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
