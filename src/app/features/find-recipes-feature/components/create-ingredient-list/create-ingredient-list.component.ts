import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-create-ingredient-list',
  templateUrl: './create-ingredient-list.component.html',
  styleUrls: ['./create-ingredient-list.component.css'],
})
export class CreateIngredientListComponent implements OnInit {
  ingredientIdList: number[] = [];
  ingredientList: Ingredient[] = [];
  responseMessage: string = '';
  @Output() ingredientIdListEvent = new EventEmitter<number[]>();

  constructor(private notifierService: NotifierService) {}

  ngOnInit(): void {}

  addIngredient(newIngredient: Ingredient) {
    this.ingredientIdList.push(newIngredient.id);
    this.ingredientList.push(newIngredient);
  }

  createList() {
    this.responseMessage = 'List created successfully!';
    this.ingredientIdListEvent.emit(this.ingredientIdList);
    this.notifierService.showNotification(this.responseMessage);
  }

  clearList() {
    this.ingredientList = [];
    this.ingredientIdList = [];
  }
}
