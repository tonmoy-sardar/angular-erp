import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CompanyService } from '../../company/company.service';
import { PurchaseOrganizationService} from '../../purchase-organization/purchase-organization.service';
import { PurchaseGroupService} from '../../purchase-group/purchase-group.service';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.scss']
})
export class MaterialAddComponent implements OnInit {
  material;
  materialTypeList=[];
  UOMList=[];
  purchaseGroupList=[];
  purchaseOrganizationList=[];

  constructor(
      private materialService: MaterialService,
      private purchaseOrganizationService: PurchaseOrganizationService, 
      private purchaseGroupService: PurchaseGroupService, 
      private companyService: CompanyService, 
      private router: Router
    ) { }

  ngOnInit() {
    this.material = {
      material_type: 0,               
      material_name: '',
      base_uom:0,
      sale_base_uom:0,
      sale_unit_per_uom:'',
      sale_unit_uom:0,
      unit_per_uom:'',
      unit_uom:0,
      for_sale_material: false,
      is_taxable: false
    };
    this.getUOMList();
    this.getMaterialTypeList();
    this.getPurchaseGroupActiveList();
    this.getPurchaseOrganizationActiveList();                                                      
  }

  getMaterialTypeList()
  {
    this.materialService.getMaterialTypeList().subscribe(
      (data: any[]) =>{   
        this.materialTypeList = data['results'];
        console.log(this.materialTypeList);
      }
     );
  }
  btnClickNav(toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  getUOMList(){
    this.companyService.getUOMList().subscribe(
      (data: any[]) =>{   
        this.UOMList = data['results'];
        console.log(this.UOMList);
      }
     );
  };

  getPurchaseGroupActiveList(){
    this.purchaseGroupService.getPurchaseGroupActiveList().subscribe(
      (data: any[]) =>{   
        this.purchaseGroupList = data;
        console.log(this.purchaseGroupList);
      }
     );
  }

  getPurchaseOrganizationActiveList(){
    this.purchaseOrganizationService.getPurchaseOrganizationActiveList().subscribe(
      (data: any[]) =>{   
        this.purchaseOrganizationList = data;
        console.log(this.purchaseOrganizationList);
      }
     );
  }

}
