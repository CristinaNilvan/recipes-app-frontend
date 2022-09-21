import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { RecipeModule } from '../recipes/recipe.module';
import { SuggestedRecipesPageComponent } from './pages/suggested-recipes-page/suggested-recipes-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SuggestedRecipesPageComponent],
  imports: [CommonModule, CoreModule, SharedModule, RecipeModule],
  exports: [SuggestedRecipesPageComponent],
})
export class SuggestRecipesModule {}
