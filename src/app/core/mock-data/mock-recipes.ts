import { MealType } from '../enums/meal-type';
import { ServingTime } from '../enums/serving-time';
import { Recipe } from '../models/recipe';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    name: 'Rec1',
    author: 'Auth1',
    description: 'Desc1',
    mealType: MealType.Normal,
    servingTime: ServingTime.Breakfast,
    calories: 500,
    fats: 100,
    carbs: 100,
    proteins: 100,
    approved: true,
    recipeImage: {
      id: 1,
      storageImageUrl:
        'https://www.acouplecooks.com/wp-content/uploads/2020/09/Veggie-Breakfast-Scramble-008-735x919.jpg',
      recipeId: 1,
    },
    recipeIngredients: [
      {
        id: 1,
        quantity: 50,
        ingredientId: 1,
      },
      {
        id: 2,
        quantity: 100,
        ingredientId: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'Rec2',
    author: 'Auth2',
    description: 'Desc2',
    mealType: MealType.Normal,
    servingTime: ServingTime.Lunch,
    calories: 500,
    fats: 100,
    carbs: 100,
    proteins: 100,
    approved: true,
    recipeImage: {
      id: 2,
      storageImageUrl:
        'https://img.taste.com.au/g-5-8ibb/taste/2021/09/creamy-roast-pumpkin-and-mascarpone-fusilli-pasta-173591-1.jpg',
      recipeId: 2,
    },
    recipeIngredients: [
      {
        id: 1,
        quantity: 50,
        ingredientId: 1,
      },
      {
        id: 2,
        quantity: 100,
        ingredientId: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Rec3',
    author: 'Auth3',
    description: 'Desc3',
    mealType: MealType.Normal,
    servingTime: ServingTime.Dinner,
    calories: 500,
    fats: 100,
    carbs: 100,
    proteins: 100,
    approved: true,
    recipeImage: {
      id: 3,
      storageImageUrl:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-mccormick-chickencoconutricecasserole-horizontal-1556288060.png',
      recipeId: 3,
    },
    recipeIngredients: [
      {
        id: 1,
        quantity: 50,
        ingredientId: 1,
      },
      {
        id: 2,
        quantity: 100,
        ingredientId: 2,
      },
    ],
  },
];
