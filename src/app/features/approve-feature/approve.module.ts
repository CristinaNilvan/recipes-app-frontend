import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproveRecipeComponent } from './components/approve-recipe/approve-recipe.component';
import { ApproveIngredientComponent } from './components/approve-ingredient/approve-ingredient.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApprovePageComponent } from './pages/approve-page/approve-page.component';

@NgModule({
  declarations: [
    ApproveRecipeComponent,
    ApproveIngredientComponent,
    ApprovePageComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ApproveRecipeComponent,
    ApproveIngredientComponent,
    ApprovePageComponent,
  ],
})
export class ApproveModule {}
