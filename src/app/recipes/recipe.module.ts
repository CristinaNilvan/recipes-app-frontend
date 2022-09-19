import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsCardComponent } from './recipe-details-card/recipe-details-card.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeDetailsCardComponent,
    RecipeDetailsComponent,
  ],
  imports: [CommonModule],
  exports: [RecipesListComponent, RecipeDetailsComponent],
})
export class RecipeModule {}
