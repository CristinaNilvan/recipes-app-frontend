import { MealType } from 'src/app/core/enums/meal-type';
import { ServingTime } from 'src/app/core/enums/serving-time';

export function getRecipeMealTypeValue(mealType: MealType): string {
  switch (mealType) {
    case MealType.Normal:
      return 'Normal';
    case MealType.Vegetarian:
      return 'Vegetarian';
    case MealType.Vegan:
      return 'Vegan';
    default:
      return '';
  }
}

export function getRecipeMealTypeKey(mealTypeValue: string): MealType {
  switch (mealTypeValue) {
    case 'Normal':
      return MealType.Normal;
    case 'Vegetarian':
      return MealType.Vegetarian;
    case 'Vegan':
      return MealType.Vegan;
    default:
      return MealType.Normal;
  }
}

export function getRecipeServingTimeValue(servingTime: ServingTime): string {
  switch (servingTime) {
    case ServingTime.Breakfast:
      return 'Breakfast';
    case ServingTime.Lunch:
      return 'Lunch';
    case ServingTime.Dinner:
      return 'Dinner';
    case ServingTime.Others:
      return 'Others';
    default:
      return '';
  }
}

export function getRecipeServingTimeKey(servingTimeValue: string): ServingTime {
  switch (servingTimeValue) {
    case 'Breakfast':
      return ServingTime.Breakfast;
    case 'Lunch':
      return ServingTime.Lunch;
    case 'Dinner':
      return ServingTime.Dinner;
    case 'Others':
      return ServingTime.Others;
    default:
      return ServingTime.Breakfast;
  }
}
