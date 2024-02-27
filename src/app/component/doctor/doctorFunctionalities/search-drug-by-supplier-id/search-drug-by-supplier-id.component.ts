import { Component } from '@angular/core';
import { DrugServiceService } from 'src/app/service/drug-service.service';

@Component({
  selector: 'app-search-drug-by-supplier-id',
  templateUrl: './search-drug-by-supplier-id.component.html',
  styleUrls: ['./search-drug-by-supplier-id.component.css'],
})
export class SearchDrugBySupplierIdComponent {
  drugList: any | null;

  constructor(private drugService: DrugServiceService) {}

  getBySupplierName(supplierName: any) {
    this.drugService.getDrugBySupplierName(supplierName).subscribe(
      (response) => {
        this.drugList = response;
        console.log(this.drugList);
      },
      (error) => {
        console.log(error);
        alert('Enter valid Supplier ID');
      }
    );
  }
}
