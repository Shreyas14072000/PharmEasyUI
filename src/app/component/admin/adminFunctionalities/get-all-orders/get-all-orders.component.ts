import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-get-all-orders',
  templateUrl: './get-all-orders.component.html',
  styleUrls: ['./get-all-orders.component.css'],
})
export class GetAllOrdersComponent implements OnInit {
  orderList: any | null;

  ngOnInit(): void {
    this.getAllOrders();
  }

  constructor(private orderService: OrderServiceService) {}

  getAllOrders() {
    this.orderService.getAllOrders().subscribe((response) => {
      this.orderList = response;
      console.log(this.orderList);
    });
  }
}
