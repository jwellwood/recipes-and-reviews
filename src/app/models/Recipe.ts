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
  // Ingredients
  ingredients?: [];
  // Steps
  steps?: [];
}
