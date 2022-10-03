import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-unapproved-recipes-admin',
  templateUrl: './unapproved-recipes-admin.component.html',
  styleUrls: ['./unapproved-recipes-admin.component.css'],
})
export class UnapprovedRecipesAdminComponent implements OnInit {
  unapprovedRecipes: Recipe[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;
  responseMessage: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.responseMessage = '';

    this.recipeService
      .getUnapprovedRecipes(this.pageNumber, this.pageSize)
      .subscribe({
        next: (recipes) => (this.unapprovedRecipes = recipes),
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
      .getUnapprovedRecipes(++this.pageNumber, this.pageSize)
      .subscribe({
        next: (recipes) => this.unapprovedRecipes.push(...recipes),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = 'No more recipes!';
          }
        },
      });
  }
}
