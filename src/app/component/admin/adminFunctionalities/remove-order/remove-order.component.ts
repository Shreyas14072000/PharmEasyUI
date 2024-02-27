import { Component } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-remove-order',
  templateUrl: './remove-order.component.html',
  styleUrls: ['./remove-order.component.css'],
})
export class RemoveOrderComponent {
  constructor(private orderService: OrderServiceService) {}

  removeOrder(orderId: any) {
    this.orderService.removeOrder(orderId).subscribe(
      (response) => {
        console.log(response);
        alert('Order details has been removed successfully');
      },

      (error) => {
        console.log(error);
        alert('Enter valid Order ID');
      }
    );
  }
}
