import { Component, Input, OnInit } from '@angular/core';
import { RecipeIngredient } from 'src/app/core/models/get-models/recipe-ingredient';
import { getIngredientCategoryValue } from 'src/app/core/utils/ingredient-functions';

@Component({
  selector: 'app-recipe-ingredient-from-list-card',
  templateUrl: './recipe-ingredient-from-list-card.component.html',
  styleUrls: ['./recipe-ingredient-from-list-card.component.css'],
})
export class RecipeIngredientFromListCardComponent implements OnInit {
  @Input() recipeIngredient!: RecipeIngredient;

  constructor() {}

  ngOnInit(): void {}

  getIngredientCategory() {
    return getIngredientCategoryValue(
      this.recipeIngredient.ingredient.category
    );
  }
}
