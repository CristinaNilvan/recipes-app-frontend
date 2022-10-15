import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecipesModule } from './features/recipes/recipes.module';
import { IngredientsModule } from './features/ingredients/ingredients.module';
import { CoreModule } from './core/core.module';
import { SuggestRecipesModule } from './features/suggest-recipes-feature/suggest-recipes.module';
import { SharedModule } from './shared/shared.module';
import { FindRecipesModule } from './features/find-recipes-feature/find-recipes.module';
import { MealPlannerModule } from './features/meal-planner-feature/meal-planner.module';
import { HomeModule } from './features/home-feature/home.module';
import { AdminModule } from './features/admin-feature/admin.module';

import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    RecipesModule,
    IngredientsModule,
    SuggestRecipesModule,
    FindRecipesModule,
    MealPlannerModule,
    AdminModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
