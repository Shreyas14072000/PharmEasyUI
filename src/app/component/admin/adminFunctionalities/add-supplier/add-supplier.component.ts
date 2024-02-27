import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { SupplierServiceService } from 'src/app/service/supplier-service.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css'],
})
export class AddSupplierComponent {
  @ViewChild('supplierForm', { static: false }) supplierForm:
    | NgForm
    | undefined; // Reference to the form

  constructor(private supplierService: SupplierServiceService) {}

  data = {
    SupplierName: '',
    ContactEmail: '',
    PhoneNumber: '',
  };

  addSupplier(data: any) {
    if (data.SupplierName && data.ContactEmail && data.PhoneNumber) {
      console.log(data);

      this.supplierService.addSupplier(data).subscribe(
        (response) => {
          console.log(response);
          alert('Drug Supplier added successfully');
        },
        (error) => {
          console.log(error);
          alert('Please enter valid data');
        }
      );
    } else {
      // Handle validation errors, display an error message.
      alert('Please fill in all required fields correctly.');
    }
  }
}
