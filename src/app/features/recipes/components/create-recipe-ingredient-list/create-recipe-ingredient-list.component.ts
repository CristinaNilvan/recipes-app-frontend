import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeIngredient } from 'src/app/core/models/get-models/recipe-ingredient';
import { RecipeIngredientService } from 'src/app/core/services/recipe-ingredient.service';

@Component({
  selector: 'app-create-recipe-ingredient-list',
  templateUrl: './create-recipe-ingredient-list.component.html',
  styleUrls: ['./create-recipe-ingredient-list.component.css'],
})
export class CreateRecipeIngredientListComponent implements OnInit {
  recipeIngredientList: RecipeIngredient[] = [];
  @Output() recipeIngredientListEvent = new EventEmitter<RecipeIngredient[]>();

  constructor(private recipeIngredientService: RecipeIngredientService) {}

  ngOnInit(): void {}

  addRecipeIngredient(newRecipeIngredient: RecipeIngredient) {
    this.recipeIngredientService
      .getRecipeIngredientById(newRecipeIngredient.id)
      .subscribe((recipeIngredient) => {
        this.recipeIngredientList.push(recipeIngredient);
      });
  }

  createList() {
    this.recipeIngredientListEvent.emit(this.recipeIngredientList);
  }

  clearList() {
    this.recipeIngredientList = [];
  }
}
