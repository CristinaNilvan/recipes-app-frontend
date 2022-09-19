import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ingredient } from 'src/app/core/models/ingredient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  url = '/api/ingredients/';

  constructor(private httpService: HttpClient) {}

  getIngredientById(id: number): Observable<Ingredient> {
    const url = `${this.url}${id}`;
    return this.httpService.get<Ingredient>(url);
  }

  getIngredientByName(name: string): Observable<Ingredient> {
    const url = `${this.url}${name}`;
    return this.httpService.get<Ingredient>(url);
  }

  getAllIngredients(
    pageNumber: number,
    pageSize: number
  ): Observable<Ingredient[]> {
    // const url = `/api/ingredients/all-ingredients?PageNumber=${pageNumber}&PageSize=${pageSize}`;
    const url = this.url + 'all-ingredients';

    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Ingredient[]>(url, { params });
  }

  getApprovedIngredients(
    pageNumber: number,
    pageSize: number
  ): Observable<Ingredient[]> {
    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Ingredient[]>(this.url, { params });
  }

  getUnapprovedIngredients(
    pageNumber: number,
    pageSize: number
  ): Observable<Ingredient[]> {
    const url = this.url + 'unapproved-ingredients';

    const params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize);

    return this.httpService.get<Ingredient[]>(url, { params });
  }
}
