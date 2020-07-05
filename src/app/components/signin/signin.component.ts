// importing components and services
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  // Declaring variables
  loginForm: FormGroup;
  errorMessage: String;
  showSpinner = false;
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.init();
  }
  init() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  // Method called after Signin  Button is clicked
  loginUser() {
    this.showSpinner = true;
    // Calling Service to Signin the user
    this.authService.loginUser(this.loginForm.value).subscribe(
      (data) => {
        console.log(data);
        this.errorMessage = null;
        this.loginForm.reset();
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      },
      (err) => {
        // Errors received from backend
        this.showSpinner = false;

        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
  onForgetPasswordClick() {
    this.router.navigate(['forget']);
  }
}
