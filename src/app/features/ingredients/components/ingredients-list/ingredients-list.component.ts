import { Component, Input, OnInit } from '@angular/core';
import { INGREDIENTS } from 'src/app/core/mock-data/mock-ingredients';
import { Ingredient } from 'src/app/core/models/ingredient';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css'],
})
export class IngredientsListComponent implements OnInit {
  @Input() ingredients!: Ingredient[];

  constructor() {}

  ngOnInit(): void {}
}
