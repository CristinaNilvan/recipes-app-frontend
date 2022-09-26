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

export function getIngredientCategoryKey(ingredientCategory: string) {
  switch (ingredientCategory) {
    case 'Meat':
      return IngredientCategory.Meat;
    case 'Dairy':
      return IngredientCategory.Dairy;
    case 'Fruit':
      return IngredientCategory.Fruit;
    case 'Vegetable':
      return IngredientCategory.Vegetable;
    case 'Herbs':
      return IngredientCategory.Herbs;
    case 'Others':
      return IngredientCategory.Others;
    default:
      return IngredientCategory.Meat;
  }
}
