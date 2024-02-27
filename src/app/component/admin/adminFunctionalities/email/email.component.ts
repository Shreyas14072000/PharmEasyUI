import { Component } from '@angular/core';
import { EmailServiceService } from 'src/app/service/email-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent {
  constructor(private emailService: EmailServiceService) {}

  data = {
    Email: '',
    Body: '',
  };

  sendEmail(email: any, body: any) {
    (this.data.Email = email), (this.data.Body = body);
    console.log(this.data);
    this.emailService.sendEmail(this.data).subscribe(
      (response) => {
        console.log(response);
        alert('email sent succesfully');
      },
      (error) => {
        console.log(error);
        alert('Please enter valid data');
      }
    );
  }
}
