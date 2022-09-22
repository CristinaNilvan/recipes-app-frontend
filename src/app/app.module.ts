import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './features/recipes/recipe.module';
import { IngredientModule } from './features/ingredients/ingredient.module';
import { CoreModule } from './core/core.module';
import { SuggestRecipesModule } from './features/suggest-recipes-feature/suggest-recipes.module';
import { SharedModule } from './shared/shared.module';
import { FindRecipesModule } from './features/find-recipes-feature/find-recipes.module';
import { MealPlannerModule } from './features/meal-planner-feature/meal-planner.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    RecipeModule,
    IngredientModule,
    SuggestRecipesModule,
    FindRecipesModule,
    MealPlannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
