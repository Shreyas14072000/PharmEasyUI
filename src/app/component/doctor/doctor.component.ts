import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigninRegistrationServiceService } from 'src/app/service/signin-registration-service.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent {
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
