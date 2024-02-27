import { Component, OnInit } from '@angular/core';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-fetch-all-suppliers',
  templateUrl: './fetch-all-suppliers.component.html',
  styleUrls: ['./fetch-all-suppliers.component.css'],
})
export class FetchAllSuppliersComponent implements OnInit {
  supplierTable: any | null;
  ngOnInit(): void {
    this.allSuppliers();
  }

  constructor(private doctorService: DoctorServiceService) {}

  allSuppliers() {
    this.doctorService.getAllSupplier().subscribe((response) => {
      this.supplierTable = response;
      console.log(this.supplierTable);
    });
  }
}
