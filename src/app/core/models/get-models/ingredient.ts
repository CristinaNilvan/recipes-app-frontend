import { IngredientCategory } from '../../enums/ingredient-category';
import { IngredientImage } from './ingredient-image';
import { RecipeIngredient } from './recipe-ingredient';

export interface Ingredient {
  id: number;
  name: string;
  category: IngredientCategory;
  calories: number;
  fats: number;
  carbs: number;
  proteins: number;
  approved: boolean;
  ingredientImage: IngredientImage;
  recipeIngredients: RecipeIngredient[];
}
