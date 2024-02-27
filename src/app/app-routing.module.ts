import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './component/signin/signin.component';
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
import { SearchOrderByIdComponent } from './component/doctor/doctorFunctionalities/search-order-by-id/search-order-by-id.component';
import { GetTotalAmountComponent } from './component/doctor/doctorFunctionalities/get-total-amount/get-total-amount.component';
import { SearchDrugByDrugNameComponent } from './component/doctor/doctorFunctionalities/search-drug-by-drug-name/search-drug-by-drug-name.component';
import { SearchDrugBySupplierIdComponent } from './component/doctor/doctorFunctionalities/search-drug-by-supplier-id/search-drug-by-supplier-id.component';
import { CreateSalesReportComponent } from './component/admin/adminFunctionalities/create-sales-report/create-sales-report.component';
import { GetAllSalesReportsComponent } from './component/admin/adminFunctionalities/get-all-sales-reports/get-all-sales-reports.component';
import { GetReportByIdComponent } from './component/admin/adminFunctionalities/get-report-by-id/get-report-by-id.component';
import { GetReportByOrderIDComponent } from './component/admin/adminFunctionalities/get-report-by-order-id/get-report-by-order-id.component';
import { UpdateDrugComponent } from './component/admin/adminFunctionalities/update-drug/update-drug.component';
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
import { AuthGuard } from './authGuard/authguard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'addDrug',
    component: AddDrugsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'fetchAllDrugs',
    component: DrugListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Doctor'] },
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'placeNewOrder',
    component: PlaceNewOrderComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Doctor'] },
  },
  {
    path: 'searchOrderByDoctorId',
    component: SearchOrderByDoctorIdComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Doctor'] },
  },
  {
    path: 'getAllOrders',
    component: GetAllOrdersComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'addSupplier',
    component: AddSupplierComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'getAllSuppliers',
    component: GetAllSuppliersComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'getOrderById',
    component: SearchOrderByIdComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Doctor'] },
  },
  {
    path: 'getTotalAmount',
    component: GetTotalAmountComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'getDrugByDrugName',
    component: SearchDrugByDrugNameComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Doctor'] },
  },
  {
    path: 'getDrugBySupplierId',
    component: SearchDrugBySupplierIdComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Doctor'] },
  },
  {
    path: 'createSalesReport',
    component: CreateSalesReportComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'getAllSalesReports',
    component: GetAllSalesReportsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'getReportById',
    component: GetReportByIdComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'getReportByOrderID',
    component: GetReportByOrderIDComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'updateDrug/:id',
    component: UpdateDrugComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'deleteDrug',
    component: DeleteDrugComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'updateSupplier',
    component: UpdateSupplierComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'deleteSupplier',
    component: DeleteSupplierComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'verifyOrder',
    component: VerifyOrderComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'pickupOrder',
    component: PickupOrderComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'removeOrder',
    component: RemoveOrderComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'email',
    component: EmailComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'allDrugs',
    component: FetchAllDrugsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Doctor'] },
  },
  {
    path: 'allSuppliers',
    component: FetchAllSuppliersComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Doctor'] },
  },
  {
    path: 'orderTotalAmount',
    component: OrderTotalAmountComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Doctor'] },
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Doctor'] },
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
