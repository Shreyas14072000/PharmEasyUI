import { Component, OnInit } from '@angular/core';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-fetch-all-drugs',
  templateUrl: './fetch-all-drugs.component.html',
  styleUrls: ['./fetch-all-drugs.component.css'],
})
export class FetchAllDrugsComponent implements OnInit {
  drugTable: any | null;
  ngOnInit(): void {
    this.allDrugs();
  }

  constructor(private doctorService: DoctorServiceService) {}

  allDrugs() {
    this.doctorService.getAllDrug().subscribe((response) => {
      this.drugTable = response;
      console.log(this.drugTable);
    });
  }
}
