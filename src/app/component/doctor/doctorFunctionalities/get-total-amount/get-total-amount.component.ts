import { Component } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-get-total-amount',
  templateUrl: './get-total-amount.component.html',
  styleUrls: ['./get-total-amount.component.css'],
})
export class GetTotalAmountComponent {
  totalAmount: string | null = '';

  constructor(private orderService: OrderServiceService) {}
  getTotalAmount(orderId: any) {
    this.orderService.getTotalAmountByOrderId(orderId).subscribe(
      (response) => {
        this.totalAmount = response.toString();
        console.log(this.totalAmount);
      },
      (error) => {
        console.log(error);
        alert('Enter valid Orders ID');
      }
    );
  }
}
