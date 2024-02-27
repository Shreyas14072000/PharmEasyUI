import { Component } from '@angular/core';
import { DrugServiceService } from 'src/app/service/drug-service.service';

@Component({
  selector: 'app-search-drug-by-drug-name',
  templateUrl: './search-drug-by-drug-name.component.html',
  styleUrls: ['./search-drug-by-drug-name.component.css'],
})
export class SearchDrugByDrugNameComponent {
  drugList: any | null;

  constructor(private drugService: DrugServiceService) {}

  getByDrugName(drugName: any) {
    this.drugService.getDrugByDrugName(drugName).subscribe(
      (response) => {
        this.drugList = response;
        console.log(this.drugList);
      },
      (error) => {
        console.log(error);
        alert('Enter Valid Drug Name');
      }
    );
  }
}
