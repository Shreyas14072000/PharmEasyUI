import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { Router } from '@angular/router';
import { SigninRegistrationServiceService } from 'src/app/service/signin-registration-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private registerService: SigninRegistrationServiceService,
    private router: Router
  ) {}

  data = {
    Username: '',
    Password: '',
    FirstName: '',
    LastName: '',
    ContactNumber: '',
    Email: '',
    Role: '',
  };

  clickToRegister(form: NgForm) {
    if (form.valid) {
      this.data.Username = form.value.username;
      this.data.Password = form.value.password;
      this.data.FirstName = form.value.firstName;
      this.data.LastName = form.value.lastName;
      this.data.ContactNumber = form.value.phoneNumber;
      this.data.Email = form.value.email;
      this.data.Role = form.value.role;
      console.log(this.data);
      this.registerService.register(this.data).subscribe(
        (response: any) => {
          console.log(response);
          alert('User with id ' + response.userID + ' registered successfully');
          this.router.navigate(['signin']);
        },
        (error) => {
          console.log(error);
          alert('Please fill valid data');
        }
      );
    } else {
      // Handle invalid form
      alert('Please fill in all required fields.');
    }
  }
}
