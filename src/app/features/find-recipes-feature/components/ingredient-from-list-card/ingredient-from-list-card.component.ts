import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { getIngredientCategoryValue } from 'src/app/core/utils/ingredient-functions';

@Component({
  selector: 'app-ingredient-from-list-card',
  templateUrl: './ingredient-from-list-card.component.html',
  styleUrls: ['./ingredient-from-list-card.component.css'],
})
export class IngredientFromListCardComponent implements OnInit {
  @Input() ingredient!: Ingredient;

  constructor() {}

  ngOnInit(): void {}

  getIngredientCategory() {
    return getIngredientCategoryValue(this.ingredient.category);
  }
}
