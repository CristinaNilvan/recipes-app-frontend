import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-found-recipes-page',
  templateUrl: './found-recipes-page.component.html',
  styleUrls: ['./found-recipes-page.component.css'],
})
export class FoundRecipesPageComponent implements OnInit {
  foundRecipes: Recipe[] = [];
  ingredientIds: number[] = [1, 3];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService
      .getFoundRecipes(this.ingredientIds)
      .subscribe((recipes) => (this.foundRecipes = recipes));
  }
}
