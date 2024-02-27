import { Component } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-search-order-by-id',
  templateUrl: './search-order-by-id.component.html',
  styleUrls: ['./search-order-by-id.component.css'],
})
export class SearchOrderByIdComponent {
  order: any | null;

  constructor(private orderService: OrderServiceService) {}

  getOrderById(orderId: any) {
    this.orderService.getOrderByOrderId(orderId).subscribe((response) => {
      this.order = response;
      console.log(this.order);
    });
  }
}
