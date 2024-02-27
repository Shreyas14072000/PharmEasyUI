import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctorServiceService {
  constructor(private http: HttpClient) {}

  getAllDrug() {
    let getAllDrugUrl = 'https://localhost:44374/api/Drug/ViewDrugsForDoctor';
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getAllDrugUrl, { headers });
  }

  getAllSupplier() {
    let getAllSupplierUrl =
      'https://localhost:44374/api/Supplier/GetAllSuppliers';
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getAllSupplierUrl, { headers });
  }

  getTotalAmountByOrderId(orderID: any) {
    let getOrderByIdUrl = `https://localhost:44374/api/Order/TotalAmount/${orderID}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getOrderByIdUrl, { headers, responseType: 'text' });
  }
}
