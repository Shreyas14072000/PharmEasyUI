import { Component } from '@angular/core';
import { SalesReportServiceService } from 'src/app/service/sales-report-service.service';

@Component({
  selector: 'app-get-report-by-order-id',
  templateUrl: './get-report-by-order-id.component.html',
  styleUrls: ['./get-report-by-order-id.component.css'],
})
export class GetReportByOrderIDComponent {
  reportList: any | null;

  constructor(private saleService: SalesReportServiceService) {}

  getReportByOrderId(ordersID: any) {
    this.saleService.getReportByOrderId(ordersID).subscribe(
      (response) => {
        this.reportList = response;
        console.log(this.reportList);
      },
      (error) => {
        console.log(error);
        alert('Enter valid Orders ID');
      }
    );
  }
}
