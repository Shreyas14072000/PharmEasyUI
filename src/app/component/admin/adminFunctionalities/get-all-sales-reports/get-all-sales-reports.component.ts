import { Component, OnInit } from '@angular/core';
import { SalesReportServiceService } from 'src/app/service/sales-report-service.service';

@Component({
  selector: 'app-get-all-sales-reports',
  templateUrl: './get-all-sales-reports.component.html',
  styleUrls: ['./get-all-sales-reports.component.css'],
})
export class GetAllSalesReportsComponent implements OnInit {
  reportList: any | null;
  ngOnInit(): void {
    this.getAllReports();
  }

  constructor(private salesService: SalesReportServiceService) {}

  getAllReports() {
    this.salesService.getAllSalesReport().subscribe((response) => {
      this.reportList = response;
      console.log(this.reportList);
    });
  }

  downloadPdf(saleId: number) {
    this.salesService.downloadPdf(saleId).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
