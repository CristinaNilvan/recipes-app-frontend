import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-all-ingredients-page',
  templateUrl: './all-ingredients-page.component.html',
  styleUrls: ['./all-ingredients-page.component.css'],
})
export class AllIngredientsPageComponent implements OnInit {
  allIngredients: Ingredient[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.ingredientService
      .getAllIngredients(this.pageNumber, this.pageSize)
      .subscribe((ingredients) => (this.allIngredients = ingredients));
  }

  onScroll() {
    this.ingredientService
      .getAllIngredients(++this.pageNumber, this.pageSize)
      .subscribe((ingredients) => this.allIngredients.push(...ingredients));
  }
}
