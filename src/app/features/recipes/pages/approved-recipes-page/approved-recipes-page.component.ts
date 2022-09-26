import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeService } from '../../../../core/services/recipe.service';

@Component({
  selector: 'app-approved-recipes-page',
  templateUrl: './approved-recipes-page.component.html',
  styleUrls: ['./approved-recipes-page.component.css'],
})
export class ApprovedRecipesPageComponent implements OnInit {
  approvedRecipes: Recipe[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService
      .getApprovedRecipes(this.pageNumber, this.pageSize)
      .subscribe((recipes) => (this.approvedRecipes = recipes));
  }

  onScroll() {
    this.recipeService
      .getApprovedRecipes(++this.pageNumber, this.pageSize)
      .subscribe((recipes) => this.approvedRecipes.push(...recipes));
  }
}
