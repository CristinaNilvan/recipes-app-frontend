import { Component, OnInit } from '@angular/core';
import { MealType } from 'src/app/core/enums/meal-type';
import { ServingTime } from 'src/app/core/enums/serving-time';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css'],
})
export class RecipeDetailsPageComponent implements OnInit {
  recipe!: Recipe;
  recipeId: number = 1;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService
      .getRecipeById(this.recipeId)
      .subscribe((recipe) => (this.recipe = recipe));
  }
}
