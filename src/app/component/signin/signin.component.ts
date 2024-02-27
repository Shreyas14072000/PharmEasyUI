import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigninRegistrationServiceService } from 'src/app/service/signin-registration-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  constructor(
    private signinService: SigninRegistrationServiceService,
    private router: Router
  ) {}

  data = {
    Email: '',
    Password: '',
  };

  email: string | null = null;
  password: string | null = null;

  handleClick() {
    if (this.email && this.password) {
      this.data.Email = this.email;
      this.data.Password = this.password;

      this.signinService.signin(this.data).subscribe(
        (response: any) => {
          sessionStorage.setItem('userID', response.userID);
          sessionStorage.setItem('email', response.email);
          sessionStorage.setItem('role', response.role);
          sessionStorage.setItem('token', response.jwtToken);
          alert('Logged in successfully');
          if (response.role === 'Admin') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['doctor']);
          }
        },
        (error) => {
          alert('Invalid credentials');
        }
      );
    } else {
      alert('Email and Password are required');
    }
  }
}
