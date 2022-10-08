import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-approved-ingredients-page',
  templateUrl: './approved-ingredients-page.component.html',
  styleUrls: ['./approved-ingredients-page.component.css'],
})
export class ApprovedIngredientsPageComponent implements OnInit {
  approvedIngredients: Ingredient[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;
  responseMessage: string = '';

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.responseMessage = '';

    this.ingredientService
      .getApprovedIngredients(this.pageNumber, this.pageSize)
      .subscribe({
        next: (ingredients) => (this.approvedIngredients = ingredients),
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
      .getApprovedIngredients(++this.pageNumber, this.pageSize)
      .subscribe({
        next: (ingredients) => this.approvedIngredients.push(...ingredients),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = 'No more ingredients!';
          }
        },
      });
  }
}
