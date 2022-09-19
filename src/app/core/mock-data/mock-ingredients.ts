import { IngredientCategory } from '../enums/ingredient-category';
import { Ingredient } from '../models/ingredient';

export const INGREDIENTS: Ingredient[] = [
  {
    id: 1,
    name: 'Ing1',
    category: IngredientCategory.Vegetable,
    calories: 50,
    fats: 10,
    carbs: 10,
    proteins: 10,
    approved: true,
    ingredientImage: {
      id: 1,
      storageImageUrl:
        'https://saverafresh.com/wp-content/uploads/2021/08/istockphoto-466175630-612x612-1.jpg',
      ingredientId: 1,
    },
    recipeIngredients: undefined,
  },
  {
    id: 2,
    name: 'Ing2',
    category: IngredientCategory.Others,
    calories: 50,
    fats: 10,
    carbs: 10,
    proteins: 10,
    approved: true,
    ingredientImage: {
      id: 2,
      storageImageUrl:
        'https://upload.wikimedia.org/wikipedia/en/5/58/Instagram_egg.jpg',
      ingredientId: 2,
    },
    recipeIngredients: undefined,
  },
  {
    id: 3,
    name: 'Ing3',
    category: IngredientCategory.Others,
    calories: 50,
    fats: 10,
    carbs: 10,
    proteins: 10,
    approved: true,
    ingredientImage: {
      id: 3,
      storageImageUrl:
        'https://shop.pastacinquepalmi.com/wp-content/uploads/2021/10/PENNE-AL-BRONZO-2-Edit.jpg',
      ingredientId: 3,
    },
    recipeIngredients: undefined,
  },
];
