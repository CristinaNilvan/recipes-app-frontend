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
import { ApproveModule } from './features/approve-feature/approve.module';
import { HomeModule } from './features/home/home.module';
import { AdminModule } from './features/admin-feature/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    RecipeModule,
    IngredientModule,
    SuggestRecipesModule,
    FindRecipesModule,
    MealPlannerModule,
    ApproveModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
