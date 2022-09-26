import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { getIngredientCategoryValue } from 'src/app/core/utils/ingredient-functions';

@Component({
  selector: 'app-ingredient-search-card',
  templateUrl: './ingredient-search-card.component.html',
  styleUrls: ['./ingredient-search-card.component.css'],
})
export class IngredientSearchCardComponent implements OnInit {
  @Input() ingredient!: Ingredient;

  constructor() {}

  ngOnInit(): void {}

  getIngredientCategory() {
    return getIngredientCategoryValue(this.ingredient.category);
  }
}
