import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/get-models/recipe';

@Component({
  selector: 'app-recipes-list-admin',
  templateUrl: './recipes-list-admin.component.html',
  styleUrls: ['./recipes-list-admin.component.css'],
})
export class RecipesListAdminComponent implements OnInit {
  @Input() recipes!: Recipe[];

  constructor() {}

  ngOnInit(): void {}
}
