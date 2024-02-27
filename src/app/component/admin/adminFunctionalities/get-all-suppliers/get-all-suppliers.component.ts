import { Component, OnInit } from '@angular/core';
import { SupplierServiceService } from 'src/app/service/supplier-service.service';

@Component({
  selector: 'app-get-all-suppliers',
  templateUrl: './get-all-suppliers.component.html',
  styleUrls: ['./get-all-suppliers.component.css'],
})
export class GetAllSuppliersComponent implements OnInit {
  supplierList: any | null;
  ngOnInit(): void {
    this.getAllSuppliers();
  }

  constructor(private supplierService: SupplierServiceService) {}

  getAllSuppliers() {
    this.supplierService.getAllSupplier().subscribe((response) => {
      this.supplierList = response;
      console.log(this.supplierList);
    });
  }
}
