import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { getIngredientCategoryValue } from 'src/app/core/utils/ingredient-functions';

@Component({
  selector: 'app-ingredient-from-list-card',
  templateUrl: './ingredient-from-list-card.component.html',
  styleUrls: ['./ingredient-from-list-card.component.css'],
})
export class IngredientFromListCardComponent implements OnInit {
  @Input() ingredient!: Ingredient;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    const route = `ingredients/${this.ingredient.id}`;
    this.router.navigate([]).then(() => {
      window.open(route);
    });
  }

  getIngredientCategory() {
    return getIngredientCategoryValue(this.ingredient.category);
  }
}
