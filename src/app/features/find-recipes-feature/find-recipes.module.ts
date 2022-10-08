import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeModule } from '../recipes/recipe.module';
import { FoundRecipesPageComponent } from './pages/found-recipes-page/found-recipes-page.component';
import { SearchIngredientForListComponent } from './components/search-ingredient-for-list/search-ingredient-for-list.component';
import { CreateIngredientListComponent } from './components/create-ingredient-list/create-ingredient-list.component';
import { IngredientFromListCardComponent } from './components/ingredient-from-list-card/ingredient-from-list-card.component';

@NgModule({
  declarations: [
    FoundRecipesPageComponent,
    SearchIngredientForListComponent,
    CreateIngredientListComponent,
    IngredientFromListCardComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule, RecipeModule],
  exports: [FoundRecipesPageComponent],
})
export class FindRecipesModule {}
