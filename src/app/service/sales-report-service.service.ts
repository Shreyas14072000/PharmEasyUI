import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesReportServiceService {
  constructor(private http: HttpClient) {}

  createSalesReport(data: any) {
    let addReportUrl = 'https://localhost:44374/api/Sales/CreateSalesReport';
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(addReportUrl, data, {
      responseType: 'text',
      headers,
    });
  }

  getAllSalesReport() {
    let getAllReportUrl = 'https://localhost:44374/api/Sales/GetAllReports';
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getAllReportUrl, { headers });
  }

  getReportById(saleID: any) {
    let getReportByIdUrl = `https://localhost:44374/api/Sales/GetReportById/${saleID}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getReportByIdUrl, { headers });
  }

  getReportByOrderId(ordersID: any) {
    let getReportByOrderUrl = `https://localhost:44374/api/Sales/ReportByOrder/${ordersID}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getReportByOrderUrl, { headers });
  }

  downloadPdf(saleId: number): Observable<any> {
    return this.http.get(
      `https://localhost:44374/api/Sales/DownloadSalesReport/${saleId}`,
      { responseType: 'arraybuffer' }
    );
  }
}
