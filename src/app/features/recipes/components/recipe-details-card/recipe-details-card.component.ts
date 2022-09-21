import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
  selector: 'app-recipe-details-card',
  templateUrl: './recipe-details-card.component.html',
  styleUrls: ['./recipe-details-card.component.css'],
})
export class RecipeDetailsCardComponent implements OnInit {
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
