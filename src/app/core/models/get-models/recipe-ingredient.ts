import { Ingredient } from './ingredient';

export interface RecipeIngredient {
  id: number;
  quantity: number;
  ingredientId: number;
  ingredient: Ingredient;
}
