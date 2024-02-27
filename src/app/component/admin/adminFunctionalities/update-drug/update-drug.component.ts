import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrugServiceService } from 'src/app/service/drug-service.service';

@Component({
  selector: 'app-update-drug',
  templateUrl: './update-drug.component.html',
  styleUrls: ['./update-drug.component.css'],
})
export class UpdateDrugComponent {
  constructor(private drugService: DrugServiceService) {}

  data = {
    DrugName: '',
    Description: '',
    DrugPrice: '',
    StockQty: '',
    ExpiryDate: '',
    SupplierID: '',
  };

  updateDrug(
    drugId: any,
    drugName: any,
    description: any,
    drugPrice: any,
    stockQty: any,
    expiryDate: any,
    supplierId: any
  ) {
    this.data.DrugName = drugName;
    this.data.Description = description;
    this.data.DrugPrice = drugPrice;
    this.data.StockQty = stockQty;
    this.data.ExpiryDate = expiryDate;
    this.data.SupplierID = supplierId;
    console.log(this.data);
    this.drugService.updateDrug(drugId, this.data).subscribe(
      (response) => {
        console.log(response);
        alert('Drug has been updated successfully');
      },

      (error) => {
        console.log(error);
        alert('Enter valid Data');
      }
    );
  }
}
