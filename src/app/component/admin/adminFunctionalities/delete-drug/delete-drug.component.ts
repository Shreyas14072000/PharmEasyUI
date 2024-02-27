import { Component } from '@angular/core';
import { DrugServiceService } from 'src/app/service/drug-service.service';

@Component({
  selector: 'app-delete-drug',
  templateUrl: './delete-drug.component.html',
  styleUrls: ['./delete-drug.component.css'],
})
export class DeleteDrugComponent {
  constructor(private drugService: DrugServiceService) {}

  deleteDrug(drugId: any) {
    this.drugService.removeDrug(drugId).subscribe(
      (response) => {
        console.log(response);
        alert('Drug has been deleted successfully');
        
      },

      (error) => {
        console.log(error);
        alert('Enter valid Drug ID');
      }
    );
  }
}
