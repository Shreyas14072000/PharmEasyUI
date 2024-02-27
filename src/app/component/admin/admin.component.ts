import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigninRegistrationServiceService } from 'src/app/service/signin-registration-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(
    private router: Router,
    private Logout: SigninRegistrationServiceService
  ) {
    let token = sessionStorage.getItem('token');
    if (token === null) {
      this.router.navigate(['/signin']);
    }
  }
  logout() {
    this.Logout.logout();
    this.router.navigate(['']);
  }
}
