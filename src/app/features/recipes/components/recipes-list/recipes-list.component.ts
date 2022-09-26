import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/get-models/recipe';

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
