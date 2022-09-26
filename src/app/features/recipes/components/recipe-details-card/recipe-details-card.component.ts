import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import {
  getRecipeMealTypeValue,
  getRecipeServingTimeValue,
} from '../../../../core/utils/recipe-functions';

@Component({
  selector: 'app-recipe-details-card',
  templateUrl: './recipe-details-card.component.html',
  styleUrls: ['./recipe-details-card.component.css'],
})
export class RecipeDetailsCardComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    const route = `/recipes/${this.recipe.id}`;
    this.router.navigate([route]);
  }

  getRecipeMealType() {
    return getRecipeMealTypeValue(this.recipe.mealType);
  }

  getRecipeServingTime() {
    return getRecipeServingTimeValue(this.recipe.servingTime);
  }
}
