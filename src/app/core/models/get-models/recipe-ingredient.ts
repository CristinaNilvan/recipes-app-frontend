import { Ingredient } from './ingredient';

export interface RecipeIngredient {
  id: number;
  quantity: number;
  ingredientId: number;

  //??? for recipe, to update
  ingredient: Ingredient;
}
