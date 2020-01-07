import { Ingredient } from "./Ingredient";
import { Step } from "./Step";

export interface Recipe {
  id?: string;
  name: string;
  dateAdded?: any;
  // Comments
  tagLine?: string;
  mainComment: string;
  // Info
  type?: string;
  servesNumber: number;
  healthRating: number;
  ingredientsTotal?: number;
  prepTime: number;
  mainImage?: string;
  imageList?: any;
  // Ingredients
  ingredients?: Ingredient[];
  // Steps
  steps?: Step[];
}
