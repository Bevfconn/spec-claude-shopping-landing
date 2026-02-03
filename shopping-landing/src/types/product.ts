export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  /** Price in cents */
  price: number;
  /** Original price for sale items (in cents) */
  originalPrice?: number;
  link: string;
}
