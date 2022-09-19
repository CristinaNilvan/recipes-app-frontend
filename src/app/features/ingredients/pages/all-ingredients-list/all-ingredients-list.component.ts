import { Component, OnInit } from '@angular/core';
import { INGREDIENTS } from 'src/app/core/mock-data/mock-ingredients';

@Component({
  selector: 'app-all-ingredients-list',
  templateUrl: './all-ingredients-list.component.html',
  styleUrls: ['./all-ingredients-list.component.css'],
})
export class AllIngredientsListComponent implements OnInit {
  ingredients = INGREDIENTS;

  constructor() {}

  ngOnInit(): void {}
}
