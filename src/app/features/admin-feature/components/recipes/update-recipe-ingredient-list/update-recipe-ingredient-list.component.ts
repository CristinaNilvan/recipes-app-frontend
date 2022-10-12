import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeIngredient } from 'src/app/core/models/get-models/recipe-ingredient';

@Component({
  selector: 'app-update-recipe-ingredients-list',
  templateUrl: './update-recipe-ingredient-list.component.html',
  styleUrls: ['./update-recipe-ingredient-list.component.css'],
})
export class UpdateRecipeIngredientsListComponent implements OnInit {
  @Input() recipeIngredients!: RecipeIngredient[];
  @Input() editMode!: boolean;
  toDeleteRecipeIngredients: RecipeIngredient[] = [];
  toDeleteRecipeIngredientIds: number[] = [];
  @Output() toDeleteRecipeIngredientListEvent = new EventEmitter<number[]>();

  constructor() {}

  ngOnInit(): void {}

  addToDeleteList(recipeIngredient: RecipeIngredient) {
    this.toDeleteRecipeIngredients.push(recipeIngredient);
    this.toDeleteRecipeIngredientIds.push(recipeIngredient.id);
  }

  createList() {
    this.toDeleteRecipeIngredientListEvent.emit(
      this.toDeleteRecipeIngredientIds
    );
  }

  clearList() {
    this.toDeleteRecipeIngredients = [];
    this.toDeleteRecipeIngredientIds = [];
  }
}
