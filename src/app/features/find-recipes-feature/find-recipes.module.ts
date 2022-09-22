import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeModule } from '../recipes/recipe.module';
import { FoundRecipesPageComponent } from './pages/found-recipes-page/found-recipes-page.component';

@NgModule({
  declarations: [FoundRecipesPageComponent],
  imports: [CommonModule, CoreModule, SharedModule, RecipeModule],
  exports: [FoundRecipesPageComponent],
})
export class FindRecipesModule {}
