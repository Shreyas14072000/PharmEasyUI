import { Component } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-search-order-by-doctor-id',
  templateUrl: './search-order-by-doctor-id.component.html',
  styleUrls: ['./search-order-by-doctor-id.component.css'],
})
export class SearchOrderByDoctorIdComponent {
  orderList: any | null;

  constructor(private orderService: OrderServiceService) {}

  doctorId = sessionStorage.getItem('userID');

  getOrderByDoctorId() {
    this.orderService
      .getOrderByDoctorId(this.doctorId)
      .subscribe((response) => {
        this.orderList = response;
        console.log(this.orderList);
      });
  }
}
