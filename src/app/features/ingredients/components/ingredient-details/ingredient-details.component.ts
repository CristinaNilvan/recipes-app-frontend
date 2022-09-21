import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';

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
    switch (this.ingredient.category) {
      case 0:
        return 'Meat';
      case 1:
        return 'Dairy';
      case 2:
        return 'Fruit';
      case 3:
        return 'Vegetable';
      case 4:
        return 'Herbs';
      case 5:
        return 'Others';
      default:
        return '';
    }
  }
}
