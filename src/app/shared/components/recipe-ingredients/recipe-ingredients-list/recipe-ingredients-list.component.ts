import { Component, Input, OnInit } from '@angular/core';
import { RecipeIngredient } from 'src/app/core/models/get-models/recipe-ingredient';

@Component({
  selector: 'app-recipe-ingredients-list',
  templateUrl: './recipe-ingredients-list.component.html',
  styleUrls: ['./recipe-ingredients-list.component.css'],
})
export class RecipeIngredientsListComponent implements OnInit {
  @Input() recipeIngredients!: RecipeIngredient[];

  constructor() {}

  ngOnInit(): void {}
}
