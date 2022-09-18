import { Component, OnInit } from '@angular/core';
import { RECIPES } from 'src/app/mock-data/mock-recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes = RECIPES;

  constructor() {}

  ngOnInit(): void {}
}
