export interface Review {
  id?: string;
  // Details
  name: string;
  website?: string;
  dateOfReview?: any;
  dateVisited: any;
  // Location
  city: string;
  country: string;
  // Comments
  tagLine?: string;
  mainComment: string;
  tasteComment?: string;
  serviceComment?: string;
  atmosphereComment?: string;
  // Ratings
  tasteRating: number;
  serviceRating: number;
  atmosphereRating: number;
  // Images
  mainImage?: string;
  imageList?: any;
}
