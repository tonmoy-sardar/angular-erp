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
      unit_per_uom:'',
      unit_uom:0,
      sale_base_uom:0,
      sale_unit_per_uom:'',
      sale_unit_uom:0,
      is_sale: false,
      is_taxable: false,
      purchase_igst:'',
      purchase_cgst:'',
      purchase_sgst:'',
      purchase_hsn:'',
      sale_igst:'',
      sale_cgst:'',
      sale_sgst:'',
      sale_hsn:'',
      purchase_organization:[],
      purchase_group:[],
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
       
      }
     );
  };

  getPurchaseGroupActiveList(){
    this.purchaseGroupService.getPurchaseGroupActiveList().subscribe(
      (data: any[]) =>{   
        this.purchaseGroupList = data;
       
      }
     );
  }

  getPurchaseOrganizationActiveList(){
    this.purchaseOrganizationService.getPurchaseOrganizationActiveList().subscribe(
      (data: any[]) =>{   
        this.purchaseOrganizationList = data;
        
      }
     );
  }

  addMaterial(){

    console.log(this.material);

    // let materialData  =  {
    //   material_fullname:this.material.material_name,
    // }
    let materialData: any;
    materialData.material_fullname = this.material.material_name;

    console.log(materialData)

      // {
      // 'material_fullname': 'Shoes',
      // 'material_type': 1,
      // 'material_code':'SH001',
      // 'description':'Demo Desc',
      // 'is_taxable':'true',
      // 'is_sale':'true',
      // 'material_uom': [
      //       {'material_for': '1', 'base_uom': 1, 'unit_per_uom': 245.00,'unit_uom':1},
      //       {'material_for': '2', 'base_uom': 1, 'unit_per_uom': 245.00,'unit_uom':1}
      //     ],
      // 'material_tax': [
      //     {'tax_for': '1', 'igst': 18.00, 'cgst': 9.00,'sgst':9.00,'hsn':'hsn12541542'},
      //       {'tax_for': '2', 'igst': 18.00, 'cgst': 9.00,'sgst':9.00,'hsn':'hsn12541542'}
      //     ],
      // 'material_pur_org': [{'pur_org': 1},{'pur_org':2}],
      // 'material_pur_grp': {'pur_group': 1}
      // }
  }

}
