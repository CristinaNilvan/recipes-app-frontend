import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsCardComponent } from './components/recipe-details-card/recipe-details-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { AllRecipesPageComponent } from './pages/all-recipes-page/all-recipes-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { RecipeDetailsPageComponent } from './pages/recipe-details-page/recipe-details-page.component';
import { ApprovedRecipesPageComponent } from './pages/approved-recipes-page/approved-recipes-page.component';
import { UnapprovedRecipesPageComponent } from './pages/unapproved-recipes-page/unapproved-recipes-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { IngredientModule } from '../ingredients/ingredient.module';
import { CreateRecipeStepperComponent } from './components/create-recipe-stepper/create-recipe-stepper.component';
import { CreateRecipeIngredientComponent } from './components/create-recipe-ingredient/create-recipe-ingredient.component';
import { CreateRecipeIngredientListComponent } from './components/create-recipe-ingredient-list/create-recipe-ingredient-list.component';
import { RecipeIngredientFromListCardComponent } from './components/recipe-ingredient-from-list-card/recipe-ingredient-from-list-card.component';

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeDetailsCardComponent,
    RecipeDetailsComponent,
    AllRecipesPageComponent,
    RecipeDetailsPageComponent,
    ApprovedRecipesPageComponent,
    UnapprovedRecipesPageComponent,
    CreateRecipeComponent,
    CreateRecipeStepperComponent,
    CreateRecipeIngredientComponent,
    CreateRecipeIngredientListComponent,
    RecipeIngredientFromListCardComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule, IngredientModule],
  exports: [
    RecipeDetailsCardComponent,
    RecipesListComponent,
    CreateRecipeComponent,
    CreateRecipeStepperComponent,
    AllRecipesPageComponent,
    ApprovedRecipesPageComponent,
    UnapprovedRecipesPageComponent,
    RecipeDetailsPageComponent,
  ],
})
export class RecipeModule {}
