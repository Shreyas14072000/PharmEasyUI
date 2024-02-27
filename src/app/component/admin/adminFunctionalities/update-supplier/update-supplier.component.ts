import { Component } from '@angular/core';
import { SupplierServiceService } from 'src/app/service/supplier-service.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css'],
})
export class UpdateSupplierComponent {
  constructor(private supplierService: SupplierServiceService) {}

  data = {
    SupplierName: '',
    ContactEmail: '',
    PhoneNumber: '',
  };

  updateSupplier(
    supplierID: any,
    supplierName: any,
    contactEmail: any,
    phoneNumber: any
  ) {
    this.data.SupplierName = supplierName;
    this.data.ContactEmail = contactEmail;
    this.data.PhoneNumber = phoneNumber;
    console.log(this.data);
    this.supplierService.updateSupplier(supplierID, this.data).subscribe(
      (response) => {
        console.log(response);
        alert('Supplier details has been updated successfully');
      },

      (error) => {
        console.log(error);
        alert('Enter valid data');
      }
    );
  }
}
