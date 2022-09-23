import { IngredientCategory } from 'src/app/core/enums/ingredient-category';

export function getIngredientCategoryValue(
  ingredientCategory: IngredientCategory
): string {
  switch (ingredientCategory) {
    case IngredientCategory.Meat:
      return 'Meat';
    case IngredientCategory.Dairy:
      return 'Dairy';
    case IngredientCategory.Fruit:
      return 'Fruit';
    case IngredientCategory.Vegetable:
      return 'Vegetable';
    case IngredientCategory.Herbs:
      return 'Herbs';
    case IngredientCategory.Others:
      return 'Others';
    default:
      return '';
  }
}
