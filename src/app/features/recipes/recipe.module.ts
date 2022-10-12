import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { ApprovedRecipesPageComponent } from './pages/approved-recipes-page/approved-recipes-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientModule } from '../ingredients/ingredient.module';
import { CreateRecipeStepperComponent } from './components/create-recipe-stepper/create-recipe-stepper.component';

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeDetailsComponent,
    ApprovedRecipesPageComponent,
    CreateRecipeStepperComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule, IngredientModule],
  exports: [
    RecipesListComponent,
    CreateRecipeStepperComponent,
    ApprovedRecipesPageComponent,
  ],
})
export class RecipeModule {}
