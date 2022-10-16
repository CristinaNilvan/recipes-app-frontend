import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllRecipesComponent } from './pages/all-recipes/all-recipes.component';

@NgModule({
  declarations: [RecipeDetailsComponent, AllRecipesComponent],
  imports: [CommonModule, CoreModule, SharedModule],
  exports: [AllRecipesComponent],
})
export class RecipesModule {}
