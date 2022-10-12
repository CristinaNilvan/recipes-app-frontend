import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';

@Component({
  selector: 'app-ingredients-list-admin',
  templateUrl: './ingredients-list-admin.component.html',
  styleUrls: ['./ingredients-list-admin.component.css'],
})
export class IngredientsListAdminComponent implements OnInit {
  @Input() ingredients!: Ingredient[];

  constructor() {}

  ngOnInit(): void {}
}
