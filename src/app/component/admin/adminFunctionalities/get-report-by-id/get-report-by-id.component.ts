import { Component } from '@angular/core';
import { SalesReportServiceService } from 'src/app/service/sales-report-service.service';

@Component({
  selector: 'app-get-report-by-id',
  templateUrl: './get-report-by-id.component.html',
  styleUrls: ['./get-report-by-id.component.css'],
})
export class GetReportByIdComponent {
  report: any | null;

  constructor(private saleService: SalesReportServiceService) {}

  getReportById(saleID: any) {
    this.saleService.getReportById(saleID).subscribe(
      (response) => {
        this.report = response;
        console.log(this.report);
      },
      (error) => {
        console.log(error);
        alert('Enter valid Sale ID');
      }
    );
  }
}
