import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe';
import { MealType } from '../enums/meal-type';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  url = '/api/recipes/';

  constructor(private httpService: HttpClient) {}

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

  getMealPlanFromRecipes(mealType: MealType, calories: number) {
    const url = this.url + 'generate-meal-plan';

    const params = new HttpParams()
      .set('MealType', mealType)
      .set('Calories', calories);
  }
}
