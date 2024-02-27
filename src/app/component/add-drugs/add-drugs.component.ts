import { Component, OnInit } from '@angular/core';
import { DrugServiceService } from 'src/app/service/drug-service.service';
import { SupplierServiceService } from 'src/app/service/supplier-service.service';

@Component({
  selector: 'app-add-drugs',
  templateUrl: './add-drugs.component.html',
  styleUrls: ['./add-drugs.component.css'],
})
export class AddDrugsComponent implements OnInit {
  ngOnInit() {
    this.getSuppliers();
  }

  constructor(
    private drugService: DrugServiceService,
    private supplierService: SupplierServiceService
  ) {}

  data = {
    DrugName: '',
    Description: '',
    DrugPrice: '',
    StockQty: '',
    ExpiryDate: '',
    SupplierID: '',
  };

  addDrug(data: any) {
    // Check if all required fields are filled
    if (
      data.DrugName &&
      data.Description &&
      data.DrugPrice &&
      data.StockQty &&
      data.ExpiryDate &&
      data.SupplierID
    ) {
      console.log(data);
      this.drugService.addDrug(data).subscribe(
        (response) => {
          console.log(response);
          alert('Drug added to the inventory successfully');
        },
        (error) => {
          console.log(error);
          alert('Add valid data');
        }
      );
    } else {
      // Handle validation errors, display an error message, etc.
      alert('Please fill in all required fields.');
    }
  }
  suppliersList: any[] | undefined;

  getSuppliers() {
    this.supplierService.getAllSupplier().subscribe((response) => {
      this.suppliersList = response;
    });
  }
}
