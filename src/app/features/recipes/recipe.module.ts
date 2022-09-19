import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsCardComponent } from './components/recipe-details-card/recipe-details-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { AllRecipesListComponent } from './pages/all-recipes-list/all-recipes-list.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeDetailsCardComponent,
    RecipeDetailsComponent,
    AllRecipesListComponent,
  ],
  imports: [CommonModule, CoreModule],
  exports: [AllRecipesListComponent, RecipeDetailsComponent],
})
export class RecipeModule {}
