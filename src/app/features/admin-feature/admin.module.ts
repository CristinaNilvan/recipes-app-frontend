import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientDetailsCardAdminComponent } from './components/ingredient-details-card-admin/ingredient-details-card-admin.component';
import { RecipeDetailsCardAdminComponent } from './components/recipe-details-card-admin/recipe-details-card-admin.component';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientsListAdminComponent } from './components/ingredients-list-admin/ingredients-list-admin.component';
import { RecipesListAdminComponent } from './components/recipes-list-admin/recipes-list-admin.component';
import { AllIngredientsAdminComponent } from './components/all-ingredients-admin/all-ingredients-admin.component';
import { ApprovedIngredientsAdminComponent } from './components/approved-ingredients-admin/approved-ingredients-admin.component';
import { UnapprovedIngredientsAdminComponent } from './components/unapproved-ingredients-admin/unapproved-ingredients-admin.component';
import { AllRecipesAdminComponent } from './components/all-recipes-admin/all-recipes-admin.component';
import { ApprovedRecipesAdminComponent } from './components/approved-recipes-admin/approved-recipes-admin.component';
import { UnapprovedRecipesAdminComponent } from './components/unapproved-recipes-admin/unapproved-recipes-admin.component';
import { AdminFeaturesComponent } from './pages/admin-features/admin-features.component';

@NgModule({
  declarations: [
    IngredientDetailsCardAdminComponent,
    RecipeDetailsCardAdminComponent,
    IngredientsListAdminComponent,
    RecipesListAdminComponent,
    AllIngredientsAdminComponent,
    ApprovedIngredientsAdminComponent,
    UnapprovedIngredientsAdminComponent,
    AllRecipesAdminComponent,
    ApprovedRecipesAdminComponent,
    UnapprovedRecipesAdminComponent,
    AdminFeaturesComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule],
  exports: [
    AllIngredientsAdminComponent,
    ApprovedIngredientsAdminComponent,
    UnapprovedIngredientsAdminComponent,
    AllRecipesAdminComponent,
    ApprovedRecipesAdminComponent,
    UnapprovedRecipesAdminComponent,
    AdminFeaturesComponent,
  ],
})
export class AdminModule {}
