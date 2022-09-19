import { Component, Input, OnInit } from '@angular/core';
import { MealType } from 'src/app/enums/meal-type';
import { ServingTime } from 'src/app/enums/serving-time';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
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
        'https://img.taste.com.au/g-5-8ibb/taste/2021/09/creamy-roast-pumpkin-and-mascarpone-fusilli-pasta-173591-1.jpg',
      recipeId: 1,
    },
    recipeIngredients: undefined,
  };

  constructor() {}

  ngOnInit(): void {}
}
