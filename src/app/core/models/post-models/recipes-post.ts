import { MealType } from '../../enums/meal-type';
import { ServingTime } from '../../enums/serving-time';

export interface RecipePost {
  name: string;
  author: string;
  description: string;
  mealType: MealType;
  servingTime: ServingTime;
  servings: number;
}
