import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-suggested-recipes-page',
  templateUrl: './suggested-recipes-page.component.html',
  styleUrls: ['./suggested-recipes-page.component.css'],
})
export class SuggestedRecipesPageComponent implements OnInit {
  suggestedRecipes: Recipe[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;
  ingredientName: string = 'Ing1';
  ingredientQuantity: number = 100;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService
      .getSuggestedRecipes(
        this.pageNumber,
        this.pageSize,
        this.ingredientName,
        this.ingredientQuantity
      )
      .subscribe((recipes) => (this.suggestedRecipes = recipes));
  }

  onScroll() {
    this.recipeService
      .getSuggestedRecipes(
        ++this.pageNumber,
        this.pageSize,
        this.ingredientName,
        this.ingredientQuantity
      )
      .subscribe((recipes) => this.suggestedRecipes.push(...recipes));
  }
}
