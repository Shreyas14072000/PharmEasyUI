import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  constructor(private http: HttpClient) {}

  placeOrder(data: any) {
    let placeOrderUrl = 'https://localhost:44374/api/Order/PlaceNewOrder';
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(placeOrderUrl, data, {
      responseType: 'text',
      headers,
    });
  }

  getAllOrders() {
    let getAllOrderUrl = 'https://localhost:44374/api/Order/GetAllOrders';
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getAllOrderUrl, { headers });
  }

  getOrderByDoctorId(doctorID: any) {
    let getOrderByDoctorUrl = `https://localhost:44374/api/Order/OrdersByDoctor/${doctorID}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getOrderByDoctorUrl, { headers });
  }

  getOrderByOrderId(orderID: any) {
    let getOrderByIdUrl = `https://localhost:44374/api/Order/GetOrderById/${orderID}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getOrderByIdUrl, { headers });
  }

  getTotalAmountByOrderId(orderID: any) {
    let getOrderByIdUrl = `https://localhost:44374/api/Order/TotalAmount/${orderID}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(getOrderByIdUrl, { headers, responseType: 'text' });
  }

  verifyOrder(orderId: any) {
    let verifyOrderUrl = `https://localhost:44374/api/Order/VerifyOrder/${orderId}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(verifyOrderUrl, null, {
      headers,
      responseType: 'text',
    });
  }

  pickupOrder(orderId: any) {
    let pickupOrderUrl = `https://localhost:44374/api/Order/Pickup/${orderId}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(pickupOrderUrl, null, {
      headers,
      responseType: 'text',
    });
  }

  removeOrder(orderId: any) {
    let removeOrderUrl = `https://localhost:44374/api/Order/DeleteOrder/${orderId}`;
    let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete(removeOrderUrl, { headers, responseType: 'text' });
  }
}
