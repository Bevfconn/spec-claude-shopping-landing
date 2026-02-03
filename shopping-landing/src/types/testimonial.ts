export interface Testimonial {
  id: string;
  customerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewText: string;
  avatarUrl?: string;
}
