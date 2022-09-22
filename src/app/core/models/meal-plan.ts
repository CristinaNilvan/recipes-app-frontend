import { Recipe } from './recipe';

export interface MealPlan {
  id: number;
  breakfast: Recipe;
  lunch: Recipe;
  dinner: Recipe;
  calories: number;
  fats: number;
  carbs: number;
  proteins: number;
}
