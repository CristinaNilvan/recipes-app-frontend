import { Component, Input, OnInit } from '@angular/core';
import { RECIPES } from 'src/app/core/mock-data/mock-recipes';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  @Input() recipes!: Recipe[];

  constructor() {}

  ngOnInit(): void {}
}
