import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-ingredient-details-page',
  templateUrl: './ingredient-details-page.component.html',
  styleUrls: ['./ingredient-details-page.component.css'],
})
export class IngredientDetailsPageComponent implements OnInit {
  ingredient!: Ingredient;
  ingredientId: number = 1;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.ingredientService
      .getIngredientById(this.ingredientId)
      .subscribe((ingredient) => (this.ingredient = ingredient));
  }
}
