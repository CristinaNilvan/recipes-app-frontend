import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from '../../../../core/services/recipe.service';

@Component({
  selector: 'app-unapproved-recipes-page',
  templateUrl: './unapproved-recipes-page.component.html',
  styleUrls: ['./unapproved-recipes-page.component.css'],
})
export class UnapprovedRecipesPageComponent implements OnInit {
  unapprovedRecipes: Recipe[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService
      .getUnapprovedRecipes(this.pageNumber, this.pageSize)
      .subscribe((recipes) => (this.unapprovedRecipes = recipes));
  }

  onScroll() {
    this.recipeService
      .getUnapprovedRecipes(++this.pageNumber, this.pageSize)
      .subscribe((recipes) => this.unapprovedRecipes.push(...recipes));
  }
}
