import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './component/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { AddDrugsComponent } from './component/add-drugs/add-drugs.component';
import { DrugListComponent } from './component/drug-list/drug-list.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { AdminComponent } from './component/admin/admin.component';
import { PlaceNewOrderComponent } from './component/doctor/doctorFunctionalities/place-new-order/place-new-order.component';
import { SearchOrderByDoctorIdComponent } from './component/doctor/doctorFunctionalities/search-order-by-doctor-id/search-order-by-doctor-id.component';
import { GetAllOrdersComponent } from './component/admin/adminFunctionalities/get-all-orders/get-all-orders.component';
import { AddSupplierComponent } from './component/admin/adminFunctionalities/add-supplier/add-supplier.component';
import { GetAllSuppliersComponent } from './component/admin/adminFunctionalities/get-all-suppliers/get-all-suppliers.component';
import { GetTotalAmountComponent } from './component/doctor/doctorFunctionalities/get-total-amount/get-total-amount.component';
import { SearchDrugByDrugNameComponent } from './component/doctor/doctorFunctionalities/search-drug-by-drug-name/search-drug-by-drug-name.component';
import { SearchDrugBySupplierIdComponent } from './component/doctor/doctorFunctionalities/search-drug-by-supplier-id/search-drug-by-supplier-id.component';
import { CreateSalesReportComponent } from './component/admin/adminFunctionalities/create-sales-report/create-sales-report.component';
import { GetAllSalesReportsComponent } from './component/admin/adminFunctionalities/get-all-sales-reports/get-all-sales-reports.component';
import { GetReportByIdComponent } from './component/admin/adminFunctionalities/get-report-by-id/get-report-by-id.component';
import { GetReportByOrderIDComponent } from './component/admin/adminFunctionalities/get-report-by-order-id/get-report-by-order-id.component';
import { DeleteDrugComponent } from './component/admin/adminFunctionalities/delete-drug/delete-drug.component';
import { UpdateSupplierComponent } from './component/admin/adminFunctionalities/update-supplier/update-supplier.component';
import { DeleteSupplierComponent } from './component/admin/adminFunctionalities/delete-supplier/delete-supplier.component';
import { VerifyOrderComponent } from './component/admin/adminFunctionalities/verify-order/verify-order.component';
import { PickupOrderComponent } from './component/admin/adminFunctionalities/pickup-order/pickup-order.component';
import { RemoveOrderComponent } from './component/admin/adminFunctionalities/remove-order/remove-order.component';
import { EmailComponent } from './component/admin/adminFunctionalities/email/email.component';
import { FetchAllDrugsComponent } from './component/doctor/doctorFunctionalities/fetch-all-drugs/fetch-all-drugs.component';
import { FetchAllSuppliersComponent } from './component/doctor/doctorFunctionalities/fetch-all-suppliers/fetch-all-suppliers.component';
import { OrderTotalAmountComponent } from './component/doctor/doctorFunctionalities/order-total-amount/order-total-amount.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    RegisterComponent,
    AddDrugsComponent,
    DrugListComponent,
    DoctorComponent,
    AdminComponent,
    PlaceNewOrderComponent,
    SearchOrderByDoctorIdComponent,
    GetAllOrdersComponent,
    AddSupplierComponent,
    GetAllSuppliersComponent,
    GetTotalAmountComponent,
    SearchDrugByDrugNameComponent,
    SearchDrugBySupplierIdComponent,
    CreateSalesReportComponent,
    GetAllSalesReportsComponent,
    GetReportByIdComponent,
    GetReportByOrderIDComponent,
    DeleteDrugComponent,
    UpdateSupplierComponent,
    DeleteSupplierComponent,
    VerifyOrderComponent,
    PickupOrderComponent,
    RemoveOrderComponent,
    EmailComponent,
    FetchAllDrugsComponent,
    FetchAllSuppliersComponent,
    OrderTotalAmountComponent,
    ConfirmationComponent,
    UnauthorizedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
