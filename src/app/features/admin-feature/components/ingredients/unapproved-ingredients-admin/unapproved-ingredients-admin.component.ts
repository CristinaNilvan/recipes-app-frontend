import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-unapproved-ingredients-admin',
  templateUrl: './unapproved-ingredients-admin.component.html',
  styleUrls: ['./unapproved-ingredients-admin.component.css'],
})
export class UnapprovedIngredientsAdminComponent implements OnInit {
  unapprovedIngredients: Ingredient[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;
  responseMessage: string = '';

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.responseMessage = '';

    this.ingredientService
      .getUnapprovedIngredients(this.pageNumber, this.pageSize)
      .subscribe({
        next: (ingredients) => (this.unapprovedIngredients = ingredients),
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
      .getUnapprovedIngredients(++this.pageNumber, this.pageSize)
      .subscribe({
        next: (ingredients) => this.unapprovedIngredients.push(...ingredients),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = 'No more ingredients!';
          }
        },
      });
  }
}
