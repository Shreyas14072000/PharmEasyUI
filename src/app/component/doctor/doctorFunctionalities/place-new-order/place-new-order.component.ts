import { Component } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-place-new-order',
  templateUrl: './place-new-order.component.html',
  styleUrls: ['./place-new-order.component.css'],
})
export class PlaceNewOrderComponent {
  constructor(private orderService: OrderServiceService) {}

  data = {
    OrderDate: this.getCurrentDate(),
    Quantity: '',
    DrugsID: '',
    DoctorID: sessionStorage.getItem('userID'),
  };

  getCurrentDate() {
    // Get the current date in the format "YYYY-MM-DD" (compatible with the input type 'date')
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  placeOrder(data: any) {
    if (data.OrderDate && data.Quantity && data.DrugsID) {
      console.log(data);
      this.orderService.placeOrder(data).subscribe(
        (response) => {
          console.log(response);
          alert('Order placed successfully');
        },
        (error) => {
          console.log(error);
          alert('Add valid data');
        }
      );
    } else {
      //Handle validation errors
      alert('Please fill all the required fields');
    }
  }
}
