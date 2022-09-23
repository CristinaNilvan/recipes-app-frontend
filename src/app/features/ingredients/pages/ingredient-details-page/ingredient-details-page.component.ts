import { Component, OnInit } from '@angular/core';
import { IngredientCategory } from 'src/app/core/enums/ingredient-category';
import { Ingredient } from 'src/app/core/models/ingredient';
import { IngredientPost } from 'src/app/core/models/post-models/ingredient-post';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-ingredient-details-page',
  templateUrl: './ingredient-details-page.component.html',
  styleUrls: ['./ingredient-details-page.component.css'],
})
export class IngredientDetailsPageComponent implements OnInit {
  ingredient!: Ingredient;
  ingredientId: number = 1;

  ing: IngredientPost = {
    name: 'Angular patch',
    category: IngredientCategory.Meat,
    calories: null,
    fats: null,
    carbs: null,
    proteins: null,
  };

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.ingredientService
      .getIngredientById(this.ingredientId)
      .subscribe((ingredient) => (this.ingredient = ingredient));
    // this.ingredientService
    //   .createIngredient(this.ing)
    //   .subscribe((ingredient) => console.log('create'));
    // this.ingredientService
    //   .deleteIngredient(16)
    //   .subscribe((ingredient) => console.log('delete'));
    // this.ingredientService
    //   .patchIngredient(15, this.ingredient)
    //   .subscribe((ingredient) => console.log('patch'));
  }
}
