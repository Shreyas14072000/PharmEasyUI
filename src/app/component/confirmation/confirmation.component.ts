import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{
  remainingTime: number = 10;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Set an interval to update the remaining time every second
    const intervalId = setInterval(() => {
      this.remainingTime--;

      // Check if the time has reached zero, and navigate to the view drugs page
      if (this.remainingTime <= 0) {
        clearInterval(intervalId);
        this.navigateToViewDrugs();
      }
    }, 1000);
  }

  navigateToViewDrugs() {
    this.router.navigate(['/allDrugs']);
  }

  navigateToOrders(){
    this.router.navigate(['/searchOrderByDoctorId']);
  }
}
