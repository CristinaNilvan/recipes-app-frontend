import { Component, OnInit } from '@angular/core';
import { RECIPES } from 'src/app/core/mock-data/mock-recipes';

@Component({
  selector: 'app-all-recipes-list',
  templateUrl: './all-recipes-list.component.html',
  styleUrls: ['./all-recipes-list.component.css'],
})
export class AllRecipesListComponent implements OnInit {
  recipes = RECIPES;

  constructor() {}

  ngOnInit(): void {}
}
