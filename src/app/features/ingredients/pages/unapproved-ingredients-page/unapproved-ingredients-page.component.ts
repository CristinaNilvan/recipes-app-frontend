import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';
import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-unapproved-ingredients-page',
  templateUrl: './unapproved-ingredients-page.component.html',
  styleUrls: ['./unapproved-ingredients-page.component.css'],
})
export class UnapprovedIngredientsPageComponent implements OnInit {
  unapprovedIngredients: Ingredient[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.ingredientService
      .getUnapprovedIngredients(this.pageNumber, this.pageSize)
      .subscribe((ingredients) => (this.unapprovedIngredients = ingredients));
  }
}