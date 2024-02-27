import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrugServiceService {
  constructor(private http: HttpClient) {}

  addDrug(data: any) {
    let addDrugUrl = 'https://localhost:44374/api/Drug/AddNewDrug';
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(addDrugUrl, data, { responseType: 'text', headers });
  }

  getAllDrug() {
    let getAllDrugUrl = 'https://localhost:44374/api/Drug/GetAllDrugs';
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getAllDrugUrl, { headers });
  }

  getDrugByDrugName(drugName: any) {
    let getDrugByDrugNameUrl = `https://localhost:44374/api/Drug/SearchDrugByName/${drugName}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getDrugByDrugNameUrl, {
      headers,
    });
  }

  getDrugBySupplierName(supplierName: any) {
    let getDrugBySupplierNameUrl = `https://localhost:44374/api/Drug/DrugsBySupplier/${supplierName}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getDrugBySupplierNameUrl, { headers });
  }

  updateDrug(drugId: any, data: any) {
    let updateDrugUrl = `https://localhost:44374/api/Drug/UpdateDrug/${drugId}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(updateDrugUrl, data, { headers });
  }

  removeDrug(drugId: any) {
    let removeDrugUrl = `https://localhost:44374/api/Drug/DeleteDrug/${drugId}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete(removeDrugUrl, { headers, responseType: 'text' });
  }

  getDrugById(drugId: any) {
    let getDrugByIdUrl = `https://localhost:44374/api/Drug/GetDrugById/${drugId}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getDrugByIdUrl, { headers });
  }
}
