import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, } from '@angular/forms';

import { CompanyService } from '../../company/company.service';
import { PurchaseOrganizationService} from '../../purchase-organization/purchase-organization.service';
import { PurchaseGroupService} from '../../purchase-group/purchase-group.service';
import { MaterialService } from '../material.service';
import { ToastrService } from 'ngx-toastr';
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
  form: FormGroup;
  material_uom_arr;

  constructor(
      private materialService: MaterialService,
      private purchaseOrganizationService: PurchaseOrganizationService, 
      private purchaseGroupService: PurchaseGroupService, 
      private companyService: CompanyService, 
      private router: Router,
      private toastr: ToastrService,
      private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    

   
    this.form = this.formBuilder.group({
      material_type: [null, Validators.required],
      material_fullname: [null, Validators.required]
    });
  
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

  // createItem(): FormGroup {
  //   return this.material_uom_arr({
  //     base_uom:new FormControl('', Validators.required),
  //     unit_per_uom:new FormControl('', Validators.required),
  //     unit_uom:new FormControl('', Validators.required)
  //   });
  // }

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

    if (this.form.valid) {

    }
    else{
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
   
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
      'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
    };
  }

}
