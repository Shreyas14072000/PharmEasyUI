import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupplierServiceService {
  constructor(private http: HttpClient) {}

  addSupplier(data: any) {
    let addSupplierUrl = 'https://localhost:44374/api/Supplier/AddNewSupplier';
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(addSupplierUrl, data, {
      responseType: 'text',
      headers,
    });
  }

  getAllSupplier(): Observable<any> {
    let getAllSupplierUrl =
      'https://localhost:44374/api/Supplier/GetAllSuppliers';
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getAllSupplierUrl, { headers });
  }

  updateSupplier(supplierID: any, data: any) {
    let updateSupplierUrl = `https://localhost:44374/api/Supplier/UpdateSupplier/${supplierID}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(updateSupplierUrl, data, { headers });
  }

  removeSupplier(supplierID: any) {
    let removeSupplierUrl = `https://localhost:44374/api/Supplier/DeleteSupplier/${supplierID}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete(removeSupplierUrl, {
      headers,
      responseType: 'text',
    });
  }

  getSupplierById(supplierID: any) {
    let getSupplierByIdUrl = `https://localhost:44374/api/Supplier/GetSupplierById/${supplierID}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getSupplierByIdUrl, { headers });
  }
}
