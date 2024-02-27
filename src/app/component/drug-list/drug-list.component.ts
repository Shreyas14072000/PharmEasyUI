import { Component, OnInit } from '@angular/core';
import { DrugServiceService } from 'src/app/service/drug-service.service';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css'],
})
export class DrugListComponent implements OnInit {
  drugList: any | null;

  ngOnInit(): void {
    this.getAllDrugs();
  }

  constructor(private drugService: DrugServiceService) {}

  getAllDrugs() {
    this.drugService.getAllDrug().subscribe((response) => {
      this.drugList = response;
      console.log(this.drugList);
    });
  }
}
