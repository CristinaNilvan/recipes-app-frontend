import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';
import {
  getRecipeMealTypeValue,
  getRecipeServingTimeValue,
} from '../../utils/recipe-functions';

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
    return getRecipeMealTypeValue(this.recipe.mealType);
  }

  getRecipeServingTime() {
    return getRecipeServingTimeValue(this.recipe.servingTime);
  }
}
