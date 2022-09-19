import { Component, OnInit } from '@angular/core';
import { MealType } from 'src/app/core/enums/meal-type';
import { ServingTime } from 'src/app/core/enums/serving-time';

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css'],
})
export class RecipeDetailsPageComponent implements OnInit {
  //@Input() recipe!: Recipe;
  recipe = {
    id: 1,
    name: 'Rec1',
    author: 'Auth1',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
  };

  constructor() {}

  ngOnInit(): void {}
}
