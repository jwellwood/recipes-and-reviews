import { Rating } from "./Rating";

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
  ratings?: Rating[];
  // Images
  mainImage?: string;
  imageList?: any;
}
