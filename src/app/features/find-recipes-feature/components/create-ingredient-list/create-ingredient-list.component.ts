import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';

@Component({
  selector: 'app-create-ingredient-list',
  templateUrl: './create-ingredient-list.component.html',
  styleUrls: ['./create-ingredient-list.component.css'],
})
export class CreateIngredientListComponent implements OnInit {
  ingredientIdList: number[] = [];
  ingredientList: Ingredient[] = [];
  @Output() ingredientIdListEvent = new EventEmitter<number[]>();

  constructor() {}

  ngOnInit(): void {}

  addIngredient(newIngredient: Ingredient) {
    this.ingredientIdList.push(newIngredient.id);
    this.ingredientList.push(newIngredient);
  }

  createList() {
    this.ingredientIdListEvent.emit(this.ingredientIdList);
  }

  clearList() {
    this.ingredientList = [];
    this.ingredientIdList = [];
  }
}
