import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { getIngredientCategoryValue } from '../../../../core/utils/ingredient-functions';

@Component({
  selector: 'app-ingredient-details-card',
  templateUrl: './ingredient-details-card.component.html',
  styleUrls: ['./ingredient-details-card.component.css'],
})
export class IngredientDetailsCardComponent implements OnInit {
  @Input() ingredient!: Ingredient;
  flipped: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    const route = `/ingredients/${this.ingredient.id}`;
    this.router.navigate([]).then(() => {
      window.open(route);
    });
  }

  getIngredientCategory() {
    return getIngredientCategoryValue(this.ingredient.category);
  }

  toggleFlip() {
    this.flipped = !this.flipped;
  }
}
