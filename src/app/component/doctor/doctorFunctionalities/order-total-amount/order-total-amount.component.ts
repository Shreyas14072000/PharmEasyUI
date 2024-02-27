import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';

declare var Razorpay: any;

@Component({
  selector: 'app-order-total-amount',
  templateUrl: './order-total-amount.component.html',
  styleUrls: ['./order-total-amount.component.css'],
})
export class OrderTotalAmountComponent {
  totalAmount: number = 0;

  constructor(
    private doctorService: DoctorServiceService,
    private router: Router
  ) {}
  getTotalAmount(orderId: any) {
    this.doctorService.getTotalAmountByOrderId(orderId).subscribe(
      (response) => {
        this.totalAmount = parseFloat(response.toString().split(' ')[1]);
        console.log(this.totalAmount);
      },
      (error) => {
        console.log(error);
        alert('Add valid Orders ID');
      }
    );
  }

  payNow() {
    const RazorpayOptions = {
      description: 'Sample Razorpay Demo',
      currency: 'INR',
      amount: this.totalAmount * 100,
      name: 'PharmEasy',
      key: 'rzp_test_tHBhgvUeOfA4rI',
      handler: (response: any) => {
        console.log(response);

        this.router.navigate(['confirmation']);
      },
      image:
        'https://cdn.iconscout.com/icon/premium/png-256-thumb/pharmacy-payment-3491205-2921890.png',
      prefill: {
        name: 'Shreyas Kabiraj',
        email: 'skabiraj1968@gmail.com',
        phone: '7980162177',
      },
      theme: {
        color: '#ccff00',
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        },
      },
    };
    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    };
    const failureCallback = (e: any) => {
      console.log(e);
    };
    Razorpay.open(RazorpayOptions, successCallback, failureCallback);
  }
}
