import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/get-models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  logInForm!: FormGroup;
  loggedIn!: boolean;
  hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn;

    this.logInForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          // Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  onLogIn() {
    const formUser: User = {
      username: this.username,
      password: this.password,
    };

    this.authService.logIn(formUser);
  }

  onLogOut() {
    this.authService.logOut();
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  get username() {
    return this.logInForm.get('username')?.value;
  }

  get password() {
    return this.logInForm.get('password')?.value;
  }
}
