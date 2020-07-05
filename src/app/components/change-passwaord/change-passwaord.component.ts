// Importing Component
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-passwaord',
  templateUrl: './change-passwaord.component.html',
  styleUrls: ['./change-passwaord.component.css'],
})
export class ChangePasswaordComponent implements OnInit {
  // Declaring Variables
  username;
  errorMessage: string;
  showSpinner = false;
  changePasswordForm: FormGroup;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUsername.subscribe(
      (username) => (this.username = username)
    );
    console.log(this.username.username);
    this.init();
  }
  init() {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      changePassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  // When the button is clicked this method is executed
  changePassword() {
    this.showSpinner = true;
    // Calling the Service
    this.authService
      .changePassword(this.username, this.changePasswordForm.value)
      .subscribe(
        (data) => {
          // console.log(data);
          this.errorMessage = null;
          this.changePasswordForm.reset();
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
}
