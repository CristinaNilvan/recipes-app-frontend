import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import {
  getRecipeMealTypeValue,
  getRecipeServingTimeValue,
} from 'src/app/core/utils/recipe-functions';

@Component({
  selector: 'app-recipe-details-card-admin',
  templateUrl: './recipe-details-card-admin.component.html',
  styleUrls: ['./recipe-details-card-admin.component.css'],
})
export class RecipeDetailsCardAdminComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    const route = `admin/recipes/${this.recipe.id}`;
    this.router.navigate([]).then(() => {
      window.open(route);
    });
  }

  getRecipeMealType() {
    return getRecipeMealTypeValue(this.recipe.mealType);
  }

  getRecipeServingTime() {
    return getRecipeServingTimeValue(this.recipe.servingTime);
  }
}
