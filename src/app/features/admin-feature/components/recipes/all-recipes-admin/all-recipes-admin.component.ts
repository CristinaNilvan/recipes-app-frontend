import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-all-recipes-admin',
  templateUrl: './all-recipes-admin.component.html',
  styleUrls: ['./all-recipes-admin.component.css'],
})
export class AllRecipesAdminComponent implements OnInit {
  allRecipes: Recipe[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;
  responseMessage: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.responseMessage = '';

    this.recipeService.getAllRecipes(this.pageNumber, this.pageSize).subscribe({
      next: (recipes) => (this.allRecipes = recipes),
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage = 'Recipes not found!';
        }
      },
    });
  }

  onScroll() {
    this.responseMessage = '';

    this.recipeService
      .getAllRecipes(++this.pageNumber, this.pageSize)
      .subscribe({
        next: (recipes) => this.allRecipes.push(...recipes),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = 'No more recipes!';
          }
        },
      });
  }
}
