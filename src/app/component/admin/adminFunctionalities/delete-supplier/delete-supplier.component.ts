import { Component } from '@angular/core';
import { SupplierServiceService } from 'src/app/service/supplier-service.service';

@Component({
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.css'],
})
export class DeleteSupplierComponent {
  constructor(private supplierService: SupplierServiceService) {}

  deleteSupplier(supplierID: any) {
    this.supplierService.removeSupplier(supplierID).subscribe(
      (response) => {
        console.log(response);
        alert('Supplier has been deleted successfully');
      },

      (error) => {
        console.log(error);
        alert('Enter valid Supplier ID');
      }
    );
  }
}
