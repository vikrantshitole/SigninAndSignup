// Importing components
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  // Declaring the variables
  userForm: FormGroup;

  errorMessage;
  showSpinner: boolean;
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.init();
  }
  init() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
    });
  }
  // Method called  when  button id clicked
  getUser() {
    this.showSpinner = true;
    // Calling service to get information of weather username exists in the database
    this.authService.getUser(this.userForm.value).subscribe(
      (result) => {
        // console.log(result);
        this.errorMessage = null;
        this.authService.setUsername(this.userForm.value);
        this.userForm.reset();
        setTimeout(() => {
          this.router.navigate(['changePassword']);
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
}
