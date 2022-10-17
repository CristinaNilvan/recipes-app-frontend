import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/get-models/user';
import { UserPost } from '../models/post-models/user-post';
import { RegisterResponse } from '../models/responses/register-response';
import { NotifierService } from './notifier.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = '/api/authenticate/';

  constructor(
    private httpService: HttpClient,
    public router: Router,
    private notifierService: NotifierService
  ) {}

  registerAdmin(user: UserPost): Observable<RegisterResponse> {
    const api = this.baseUrl + 'register-admin';
    return this.httpService.post<RegisterResponse>(api, user);
  }

  logIn(user: User) {
    const api = this.baseUrl + 'login';
    return this.httpService.post(api, user).subscribe({
      next: (result: any) => {
        localStorage.setItem('access_token', result.token);
        this.router.navigate(['admin']).then(() => {
          window.location.reload();
        });
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.notifierService.showNotification(
            'Wrong username or password, try again!'
          );
        }
      },
    });
  }

  logOut() {
    localStorage.removeItem('access_token');
    window.location.reload();
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
