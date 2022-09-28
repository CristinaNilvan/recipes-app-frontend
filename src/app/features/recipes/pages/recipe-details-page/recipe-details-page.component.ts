import { Component, OnInit } from '@angular/core';
import { MealType } from 'src/app/core/enums/meal-type';
import { ServingTime } from 'src/app/core/enums/serving-time';
import { RecipePost } from 'src/app/core/models/post-models/recipe-post';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeService } from '../../../../core/services/recipe.service';

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css'],
})
export class RecipeDetailsPageComponent implements OnInit {
  recipe!: Recipe;
  recipeId: number = 1;

  rec: RecipePost = {
    name: 'Ing12',
    author: null,
    description: null,
    mealType: MealType.Vegan,
    servingTime: ServingTime.Others,
    servings: 5,
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // this.recipeService
    //   .getRecipeById(this.recipeId)
    //   .subscribe((recipe) => (this.recipe = recipe));
    // this.recipeService
    //   .createRecipe(this.rec)
    //   .subscribe((recipe) => console.log('create'));
    // this.recipeService
    //   .deleteRecipe(18)
    //   .subscribe((recipe) => console.log('delete'));
    // this.recipeService
    //   .approveRecipe(8)
    //   .subscribe((recipe) => console.log('approved'));
    // this.recipeService
    //   .patchRecipe(12, this.rec)
    //   .subscribe((recipe) => console.log('patch'));
  }
}
