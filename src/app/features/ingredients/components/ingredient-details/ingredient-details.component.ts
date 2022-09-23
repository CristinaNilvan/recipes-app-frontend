import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';
import { getIngredientCategoryValue } from '../../utils/ingredient-functions';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css'],
})
export class IngredientDetailsComponent implements OnInit {
  @Input() ingredient!: Ingredient;

  constructor() {}

  ngOnInit(): void {}

  getIngredientCategory() {
    return getIngredientCategoryValue(this.ingredient.category);
  }
}
