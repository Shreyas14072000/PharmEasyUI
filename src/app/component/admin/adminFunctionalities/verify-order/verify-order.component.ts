import { Component } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-verify-order',
  templateUrl: './verify-order.component.html',
  styleUrls: ['./verify-order.component.css'],
})
export class VerifyOrderComponent {
  constructor(private orderService: OrderServiceService) {}

  verifyOrder(orderId: any) {
    this.orderService.verifyOrder(orderId).subscribe(
      (response) => {
        console.log(response);
        alert('Order has been verified and confirmed for pickup');
      },

      (error) => {
        console.log(error);
        alert('Enter valid Order ID');
      }
    );
  }
}
