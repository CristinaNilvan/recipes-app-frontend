import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-all-recipes-page',
  templateUrl: './all-recipes-page.component.html',
  styleUrls: ['./all-recipes-page.component.css'],
})
export class AllRecipesPageComponent implements OnInit {
  allRecipes: Recipe[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService
      .getAllRecipes(this.pageNumber, this.pageSize)
      .subscribe((recipes) => (this.allRecipes = recipes));
  }
}
