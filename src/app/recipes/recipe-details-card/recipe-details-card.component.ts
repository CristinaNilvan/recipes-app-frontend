import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-details-card',
  templateUrl: './recipe-details-card.component.html',
  styleUrls: ['./recipe-details-card.component.css'],
})
export class RecipeDetailsCardComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
