import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeIngredient } from 'src/app/core/models/get-models/recipe-ingredient';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { RecipeIngredientService } from 'src/app/core/services/recipe-ingredient.service';

@Component({
  selector: 'app-create-recipe-ingredient-list',
  templateUrl: './create-recipe-ingredient-list.component.html',
  styleUrls: ['./create-recipe-ingredient-list.component.css'],
})
export class CreateRecipeIngredientListComponent implements OnInit {
  @Input() editMode!: boolean;
  recipeIngredientList: RecipeIngredient[] = [];
  recipeIngredientIdList: number[] = [];
  responseMessage: string = '';
  @Output() recipeIngredientIdListEvent = new EventEmitter<number[]>();

  constructor(
    private recipeIngredientService: RecipeIngredientService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {}

  addRecipeIngredient(newRecipeIngredient: RecipeIngredient) {
    this.recipeIngredientService
      .getRecipeIngredientById(newRecipeIngredient.id)
      .subscribe((recipeIngredient) => {
        this.recipeIngredientList.push(recipeIngredient);
        this.recipeIngredientIdList.push(newRecipeIngredient.id);
      });
  }

  createList() {
    this.responseMessage = 'List created successfully!';
    this.recipeIngredientIdListEvent.emit(this.recipeIngredientIdList);
    this.notifierService.showNotification(this.responseMessage);
  }

  clearList() {
    this.recipeIngredientList = [];
    this.recipeIngredientIdList = [];
  }
}
