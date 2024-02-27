import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalesReportServiceService } from 'src/app/service/sales-report-service.service';

@Component({
  selector: 'app-create-sales-report',
  templateUrl: './create-sales-report.component.html',
  styleUrls: ['./create-sales-report.component.css'],
})
export class CreateSalesReportComponent {
  constructor(private salesReportService: SalesReportServiceService) {}

  data = {
    SaleDate: '',
    TotalAmount: '',
    OrdersID: '',
  };

  createReport(data: any) {
    if (this.data.SaleDate && this.data.TotalAmount && this.data.OrdersID) {
      console.log(data);
      this.salesReportService.createSalesReport(data).subscribe(
        (response) => {
          console.log(response);
          alert('Sales Report generated successfully');
        },
        (error) => {
          console.log(error);
          alert('Enter valid data');
        }
      );
    } else {
      //Handle validation errors, display an error message.
      console.log('Please fill in all required fields');
    }
  }
}
