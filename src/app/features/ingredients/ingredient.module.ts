import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientDetailsCardComponent } from './components/ingredient-details-card/ingredient-details-card.component';
import { AllIngredientsPageComponent } from './pages/all-ingredients-page/all-ingredients-page.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    IngredientsListComponent,
    IngredientDetailsCardComponent,
    AllIngredientsPageComponent,
  ],
  imports: [CommonModule, CoreModule],
  exports: [AllIngredientsPageComponent],
})
export class IngredientModule {}
