export interface FeaturedProduct {
  id: number;
  description: string;
  imageSource: string;
  price: number;
}

export interface FeaturedProductsResponse {
  message: string | null;
  featuredProducts: FeaturedProduct[];
}
