import { Component } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-pickup-order',
  templateUrl: './pickup-order.component.html',
  styleUrls: ['./pickup-order.component.css'],
})
export class PickupOrderComponent {
  constructor(private orderService: OrderServiceService) {}

  pickupOrder(orderId: any) {
    this.orderService.pickupOrder(orderId).subscribe(
      (response) => {
        console.log(response);
        alert('Order has been successfully picked up');
      },

      (error) => {
        console.log(error);
        alert('Enter valid Order ID');
      }
    );
  }
}
