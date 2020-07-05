// importing components and services
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
// Declaring Variables
  signupForm: FormGroup;
  errorMessage: String;
  showSpinner = false;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.init();
  }
  init() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
// Method called when signup button is clicked
  signupUser() {
    this.showSpinner = true;
// Calling service to signup user
    this.authService.registerUser(this.signupForm.value).subscribe(
      (data) => {
        console.log(data);
        this.errorMessage = null;
        this.signupForm.reset();
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      },
      (err) => {
        // Errors received from backend
        this.showSpinner = false;
        if (err.error.msg) {
          this.errorMessage = err.error.msg[0].message;
        }
        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
}
