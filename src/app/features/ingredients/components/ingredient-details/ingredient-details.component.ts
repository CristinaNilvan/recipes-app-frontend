import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { getIngredientCategoryValue } from '../../../../core/utils/ingredient-functions';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css'],
})
export class IngredientDetailsComponent implements OnInit {
  ingredient!: Ingredient;

  constructor(
    private route: ActivatedRoute,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.getIngredient();
  }

  getIngredient() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.ingredientService
      .getIngredientById(id)
      .subscribe((ingredient) => (this.ingredient = ingredient));
  }

  getIngredientCategory() {
    return getIngredientCategoryValue(this.ingredient.category);
  }
}
