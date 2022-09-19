import { Component, OnInit } from '@angular/core';
import { INGREDIENTS } from 'src/app/core/mock-data/mock-ingredients';

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
