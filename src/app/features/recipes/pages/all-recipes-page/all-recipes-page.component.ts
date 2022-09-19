import { Component, OnInit } from '@angular/core';
import { RECIPES } from 'src/app/core/mock-data/mock-recipes';

@Component({
  selector: 'app-all-recipes-page',
  templateUrl: './all-recipes-page.component.html',
  styleUrls: ['./all-recipes-page.component.css'],
})
export class AllRecipesPageComponent implements OnInit {
  allRecipes = RECIPES;

  constructor() {}

  ngOnInit(): void {}
}
