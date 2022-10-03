import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { getIngredientCategoryValue } from 'src/app/core/utils/ingredient-functions';

@Component({
  selector: 'app-ingredient-details-card-admin',
  templateUrl: './ingredient-details-card-admin.component.html',
  styleUrls: ['./ingredient-details-card-admin.component.css'],
})
export class IngredientDetailsCardAdminComponent implements OnInit {
  @Input() ingredient!: Ingredient;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    const route = `/ingredients/${this.ingredient.id}`;
    this.router.navigate([route]);
  }

  getIngredientCategory() {
    return getIngredientCategoryValue(this.ingredient.category);
  }
}
