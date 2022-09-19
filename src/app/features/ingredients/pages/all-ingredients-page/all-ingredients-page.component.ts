import { Component, OnInit } from '@angular/core';
import { INGREDIENTS } from 'src/app/core/mock-data/mock-ingredients';

@Component({
  selector: 'app-all-ingredients-page',
  templateUrl: './all-ingredients-page.component.html',
  styleUrls: ['./all-ingredients-page.component.css'],
})
export class AllIngredientsPageComponent implements OnInit {
  allIngredients = INGREDIENTS;

  constructor() {}

  ngOnInit(): void {}
}
