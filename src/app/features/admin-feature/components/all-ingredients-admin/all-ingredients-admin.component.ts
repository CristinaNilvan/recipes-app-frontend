import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-all-ingredients-admin',
  templateUrl: './all-ingredients-admin.component.html',
  styleUrls: ['./all-ingredients-admin.component.css'],
})
export class AllIngredientsAdminComponent implements OnInit {
  allIngredients: Ingredient[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;
  responseMessage: string = '';

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.responseMessage = '';

    this.ingredientService
      .getAllIngredients(this.pageNumber, this.pageSize)
      .subscribe({
        next: (ingredients) => (this.allIngredients = ingredients),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = 'Ingredients not found!';
          }
        },
      });
  }

  onScroll() {
    this.responseMessage = '';

    this.ingredientService
      .getAllIngredients(++this.pageNumber, this.pageSize)
      .subscribe({
        next: (ingredients) => this.allIngredients.push(...ingredients),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = 'No more ingredients!';
          }
        },
      });
  }
}
