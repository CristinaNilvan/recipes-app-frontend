import { MealType } from '../enums/meal-type';
import { ServingTime } from '../enums/serving-time';
import { RecipeImage } from './recipe-image';
import { RecipeIngredient } from './recipe-ingredient';

export interface Recipe {
  id: number;
  name: string;
  author: string;
  description: string;
  mealType: MealType;
  servingTime: ServingTime;
  servings: number;
  calories: number;
  fats: number;
  carbs: number;
  proteins: number;
  approved: boolean;
  recipeImage: RecipeImage;
  recipeIngredients: RecipeIngredient[];
}
