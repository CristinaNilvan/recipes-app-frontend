import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';
import {
  getRecipeMealTypeValue,
  getRecipeServingTimeValue,
} from '../../../../core/utils/recipe-functions';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService
      .getRecipeById(id)
      .subscribe((recipe) => (this.recipe = recipe));
  }

  getRecipeMealType() {
    return getRecipeMealTypeValue(this.recipe.mealType);
  }

  getRecipeServingTime() {
    return getRecipeServingTimeValue(this.recipe.servingTime);
  }
}
