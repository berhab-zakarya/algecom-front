export interface Testimonial {
    quote: string;
    author: string;
    handle: string;
  }
  
  export interface Plan {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular: boolean;
    billing: string;
  }
  
  export interface Feature {
    title: string;
    description: string;
  }