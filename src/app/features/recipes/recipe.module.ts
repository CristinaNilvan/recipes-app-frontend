import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { ApprovedRecipesPageComponent } from './pages/approved-recipes-page/approved-recipes-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientModule } from '../ingredients/ingredient.module';

@NgModule({
  declarations: [RecipeDetailsComponent, ApprovedRecipesPageComponent],
  imports: [CommonModule, CoreModule, SharedModule, IngredientModule],
  exports: [ApprovedRecipesPageComponent],
})
export class RecipeModule {}
