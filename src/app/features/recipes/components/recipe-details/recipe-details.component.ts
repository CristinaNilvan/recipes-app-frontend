import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor() {}

  ngOnInit(): void {}

  getRecipeMealType() {
    switch (this.recipe.mealType) {
      case 0:
        return 'Normal';
      case 1:
        return 'Vegetarian';
      case 2:
        return 'Vegan';
      default:
        return '';
    }
  }

  getRecipeServingTime() {
    switch (this.recipe.servingTime) {
      case 0:
        return 'Breakfast';
      case 1:
        return 'Lunch';
      case 2:
        return 'Dinner';
      case 3:
        return 'Others';
      default:
        return '';
    }
  }
}
