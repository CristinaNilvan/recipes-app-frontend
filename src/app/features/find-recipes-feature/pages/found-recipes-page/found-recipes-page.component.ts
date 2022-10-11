import { ViewportScroller } from '@angular/common';
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
  found: boolean = false;
  foundRecipes!: Recipe[];
  ingredientIds: number[] = [];
  responseMessage: string = '';

  constructor(
    private scroller: ViewportScroller,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {}

  findRecipes() {
    this.responseMessage = '';

    this.recipeService.getFoundRecipes(this.ingredientIds).subscribe({
      next: (recipes) => {
        this.foundRecipes = recipes;
        this.found = true;
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage =
            "Can't find recipes with at least one of the ingredients!";
        }
      },
    });
  }

  navigateToFragment(event: any) {
    this.scroller.scrollToAnchor('foundRecipes');
    event.preventDefault();
  }

  setIngredientIds(ingredientIds: number[]) {
    this.ingredientIds = ingredientIds;
    this.found = false;
  }
}
