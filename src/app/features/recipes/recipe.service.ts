import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe';

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
}
