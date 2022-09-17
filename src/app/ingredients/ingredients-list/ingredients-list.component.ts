import { Component, OnInit } from '@angular/core';
import { INGREDIENTS } from 'src/app/mock-data/mock-ingredients';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css'],
})
export class IngredientsListComponent implements OnInit {
  ingredients = INGREDIENTS;

  constructor() {}

  ngOnInit(): void {}
}
