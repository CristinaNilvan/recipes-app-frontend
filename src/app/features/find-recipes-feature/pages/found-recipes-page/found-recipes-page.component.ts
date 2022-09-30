import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-found-recipes-page',
  templateUrl: './found-recipes-page.component.html',
  styleUrls: ['./found-recipes-page.component.css'],
})
export class FoundRecipesPageComponent implements OnInit {
  foundRecipes!: Recipe[];
  ingredientIds: number[] = [];
  responseMessage: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  findRecipes() {
    this.responseMessage = '';

    this.recipeService.getFoundRecipes(this.ingredientIds).subscribe({
      next: (recipes) => (this.foundRecipes = recipes),
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage =
            "Can't find recipes with at least one of the ingredients!";
        }
      },
    });
  }

  setIngredientIds(ingredientIds: number[]) {
    this.ingredientIds = ingredientIds;
  }
}
