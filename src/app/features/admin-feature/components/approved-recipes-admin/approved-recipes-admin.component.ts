import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-approved-recipes-admin',
  templateUrl: './approved-recipes-admin.component.html',
  styleUrls: ['./approved-recipes-admin.component.css'],
})
export class ApprovedRecipesAdminComponent implements OnInit {
  approvedRecipes: Recipe[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;
  responseMessage: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.responseMessage = '';

    this.recipeService
      .getApprovedRecipes(this.pageNumber, this.pageSize)
      .subscribe({
        next: (recipes) => (this.approvedRecipes = recipes),
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
      .getApprovedRecipes(++this.pageNumber, this.pageSize)
      .subscribe({
        next: (recipes) => this.approvedRecipes.push(...recipes),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = 'No more recipes!';
          }
        },
      });
  }
}
