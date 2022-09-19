import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsCardComponent } from './components/recipe-details-card/recipe-details-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { AllRecipesPageComponent } from './pages/all-recipes-page/all-recipes-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { RecipeDetailsPageComponent } from './pages/recipe-details-page/recipe-details-page.component';

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeDetailsCardComponent,
    RecipeDetailsComponent,
    AllRecipesPageComponent,
    RecipeDetailsPageComponent,
  ],
  imports: [CommonModule, CoreModule],
  exports: [AllRecipesPageComponent, RecipeDetailsPageComponent],
})
export class RecipeModule {}
