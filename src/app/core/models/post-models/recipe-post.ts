import { MealType } from '../../enums/meal-type';
import { ServingTime } from '../../enums/serving-time';

export interface RecipePost {
  name: string | null;
  author: string | null;
  description: string | null;
  mealType: MealType | null;
  servingTime: ServingTime | null;
  servings: number | null;
}
