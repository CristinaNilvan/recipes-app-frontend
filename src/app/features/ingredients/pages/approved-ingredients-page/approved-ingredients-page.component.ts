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
  pageSize: number = 5;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.ingredientService
      .getApprovedIngredients(this.pageNumber, this.pageSize)
      .subscribe((ingredients) => (this.approvedIngredients = ingredients));
  }

  onScroll() {
    this.ingredientService
      .getApprovedIngredients(++this.pageNumber, this.pageSize)
      .subscribe((ingredients) =>
        this.approvedIngredients.push(...ingredients)
      );
  }
}
