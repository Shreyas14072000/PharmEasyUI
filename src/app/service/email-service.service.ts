import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailServiceService {
  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    let sendEmailUrl = 'https://localhost:44374/api/Email/SendEmail';
    return this.http.post(sendEmailUrl, data);
  }
}
