import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SigninRegistrationServiceService {
  private readonly SESSION_STORAGE_KEY = 'user';
  constructor(private http: HttpClient) {}

  signin(data: any) {
    let signinUrl = 'https://localhost:44374/api/Token/UserLogin';
    return this.http.post(signinUrl, data).pipe(
      map((response: any) => {
        const userData = {
          role: response.role,
          jwtToken: response.jwtToken,
          userID: response.userID,
          email: response.email,
        };
        sessionStorage.setItem(
          this.SESSION_STORAGE_KEY,
          JSON.stringify(userData)
        );
        return response;
      })
    );
  }

  register(data: any) {
    let registrationUrl = 'https://localhost:44374/api/Token/RegisterNewUser';
    return this.http.post(registrationUrl, data);
  }

  logout(): void {
    sessionStorage.removeItem(this.SESSION_STORAGE_KEY);
  }

  isAuthenticated(): boolean {
    // Check your authentication logic here
    // For simplicity, always assume the user is authenticated in this example
    return true;
  }

  getUserRole(): string {
    const userData = this.getUserData();
    return userData ? userData.role : '';
  }

  getUserId(): string {
    const userData = this.getUserData();
    return userData ? userData.userID : '';
  }

  getUserEmail(): string {
    const userData = this.getUserData();
    return userData ? userData.email : '';
  }

  getJwtToken(): string {
    const userData = this.getUserData();
    return userData ? userData.jwtToken : '';
  }

  private getUserData(): any {
    const userDataString = sessionStorage.getItem(this.SESSION_STORAGE_KEY);
    return userDataString ? JSON.parse(userDataString) : null;
  }
}
