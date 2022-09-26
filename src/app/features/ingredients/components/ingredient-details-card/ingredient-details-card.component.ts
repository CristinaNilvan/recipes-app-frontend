import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';
import { getIngredientCategoryValue } from '../../../../core/utils/ingredient-functions';

@Component({
  selector: 'app-ingredient-details-card',
  templateUrl: './ingredient-details-card.component.html',
  styleUrls: ['./ingredient-details-card.component.css'],
})
export class IngredientDetailsCardComponent implements OnInit {
  @Input() ingredient!: Ingredient;

  constructor() {}

  ngOnInit(): void {}

  getIngredientCategory() {
    return getIngredientCategoryValue(this.ingredient.category);
  }
}
