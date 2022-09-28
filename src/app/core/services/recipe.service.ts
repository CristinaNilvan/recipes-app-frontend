import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { MealType } from '../enums/meal-type';
import { MealPlan } from '../models/get-models/meal-plan';
import { RecipeIngredient } from '../models/get-models/recipe-ingredient';
import { RecipePost } from '../models/post-models/recipe-post';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  url = '/api/recipes/';

  constructor(private httpService: HttpClient) {}

  createRecipe(recipe: RecipePost): Observable<Recipe> {
    return this.httpService.post<Recipe>(this.url, recipe);
  }

  getRecipeById(id: number): Observable<Recipe> {
    const url = `${this.url}${id}`;
    return this.httpService.get<Recipe>(url);
  }

  getRecipeByName(name: string): Observable<Recipe> {
    const url = `${this.url}${name}`;
    return this.httpService.get<Recipe>(url);
  }

  getAllRecipes(pageNumber: number, pageSize: number): Observable<Recipe[]> {
    const url = this.url + 'all-recipes';

    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Recipe[]>(url, { params });
  }

  getApprovedRecipes(
    pageNumber: number,
    pageSize: number
  ): Observable<Recipe[]> {
    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Recipe[]>(this.url, { params });
  }

  getUnapprovedRecipes(
    pageNumber: number,
    pageSize: number
  ): Observable<Recipe[]> {
    const url = this.url + 'unapproved-recipes';

    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Recipe[]>(url, { params });
  }

  getFoundRecipes(ids: number[]): Observable<Recipe[]> {
    const url = this.url + 'find-recipes';
    const params = new HttpParams().appendAll({ ingredientIds: ids });

    return this.httpService.get<Recipe[]>(url, { params });
  }

  getSuggestedRecipes(
    pageNumber: number,
    pageSize: number,
    ingredientName: string,
    ingredientQuantity: number
  ): Observable<Recipe[]> {
    const url = this.url + 'suggest-recipes';

    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize)
      .set('IngredientName', ingredientName)
      .set('IngredientQuantity', ingredientQuantity);

    return this.httpService.get<Recipe[]>(url, { params });
  }

  generateMealPlanFromRecipes(
    mealType: MealType,
    calories: number
  ): Observable<MealPlan> {
    const url = this.url + 'generate-meal-plan';

    const params = new HttpParams()
      .set('MealType', mealType)
      .set('Calories', calories);

    return this.httpService.get<MealPlan>(url, { params });
  }

  patchRecipe(id: number, recipe: RecipePost): Observable<{}> {
    const url = `${this.url}${id}`;
    return this.httpService.patch(url, recipe);
  }

  approveRecipe(id: number): Observable<{}> {
    const url = `${this.url}unapproved-recipes/${id}`;
    return this.httpService.patch(url, null);
  }

  deleteRecipe(id: number): Observable<{}> {
    const url = `${this.url}${id}`;
    return this.httpService.delete(url);
  }

  addRecipeIngredientToRecipe(id: number, recipeIngredient: RecipeIngredient) {
    const url = `${this.url}${id}/recipe-ingredients/${recipeIngredient.id}`;
    return this.httpService.post<Recipe>(url, recipeIngredient);
  }

  addImageToRecipe(id: number, formData: FormData): Observable<{}> {
    const url = `${this.url}${id}/image`;
    return this.httpService.post(url, formData);
  }
}
