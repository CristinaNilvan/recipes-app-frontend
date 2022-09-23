import { IngredientCategory } from '../../enums/ingredient-category';

export interface IngredientPost {
  name: string | null;
  category: IngredientCategory | null;
  calories: number | null;
  fats: number | null;
  carbs: number | null;
  proteins: number | null;
}
