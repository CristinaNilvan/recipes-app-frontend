import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeIngredient } from 'src/app/core/models/get-models/recipe-ingredient';
import { getIngredientCategoryValue } from 'src/app/core/utils/ingredient-functions';

@Component({
  selector: 'app-recipe-ingredient-from-list-card',
  templateUrl: './recipe-ingredient-from-list-card.component.html',
  styleUrls: ['./recipe-ingredient-from-list-card.component.css'],
})
export class RecipeIngredientFromListCardComponent implements OnInit {
  @Input() recipeIngredient!: RecipeIngredient;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    const route = `ingredients/${this.recipeIngredient.ingredient.id}`;
    this.router.navigate([]).then(() => {
      window.open(route);
    });
  }

  getIngredientCategory() {
    return getIngredientCategoryValue(
      this.recipeIngredient.ingredient.category
    );
  }
}
