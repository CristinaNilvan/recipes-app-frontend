import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeIngredient } from 'src/app/core/models/get-models/recipe-ingredient';

@Component({
  selector: 'app-create-recipe-ingredient-list',
  templateUrl: './create-recipe-ingredient-list.component.html',
  styleUrls: ['./create-recipe-ingredient-list.component.css'],
})
export class CreateRecipeIngredientListComponent implements OnInit {
  recipeIngredientList: RecipeIngredient[] = [];
  @Output() recipeIngredientListEvent = new EventEmitter<RecipeIngredient[]>();

  constructor() {}

  ngOnInit(): void {}

  addRecipeIngredient(newRecipeIngredient: RecipeIngredient) {
    this.recipeIngredientList.push(newRecipeIngredient);
  }

  createList() {
    this.recipeIngredientListEvent.emit(this.recipeIngredientList);
  }

  clearList() {
    this.recipeIngredientList = [];
  }
}
