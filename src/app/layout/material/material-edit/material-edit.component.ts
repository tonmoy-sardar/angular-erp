import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, FormArray, Validators, } from '@angular/forms';

import { CompanyService } from '../../company/company.service';
import { PurchaseOrganizationService} from '../../purchase-organization/purchase-organization.service';
import { PurchaseGroupService} from '../../purchase-group/purchase-group.service';
import { MaterialService } from '../material.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.scss']
})
export class MaterialEditComponent implements OnInit {
  material;
  materialTypeList=[];
  UOMList=[];
  purchaseGroupList=[];
  purchaseOrganizationList=[];
  form: FormGroup;
  is_taxable_value=false;

  constructor(
    private materialService: MaterialService,
    private purchaseOrganizationService: PurchaseOrganizationService, 
    private purchaseGroupService: PurchaseGroupService, 
    private companyService: CompanyService, 
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.material = {
      id: '',
      material_type: '',
      material_fullname:'',
      material_code:'',
      description:'',
      is_sales:false,
      is_taxable:false,
      material_uom: [
          {   
            "material_for": '',
            "base_uom": '',
            "unit_per_uom":'',
            "unit_uom":''
          },
          {   
            "material_for": '',
            "base_uom": '',
            "unit_per_uom":'',
            "unit_uom":''
          }
        ],
     material_tax: [
            {
              "tax_for":'',
              "igst":'',
              "cgst":'',
              "sgst":'',
              "hsn":''
            },
            {
              "tax_for":'',
              "igst":'',
              "cgst":'',
              "sgst":'',
              "hsn":''
            }
        ],
      
    };

    this.form = this.formBuilder.group({
      material_type: [null, Validators.required],
      material_code:  [null, Validators.required],
      material_fullname: [null, Validators.required],
      material_purchase_org:[null, Validators.required],
      material_purchase_grp:[null, Validators.required],
      description:[null, Validators.required],
      material_uom:this.formBuilder.array([ this.createmMaterialUom(1) ]),
      is_sales: [false],
      is_taxable: [false],
      material_tax:this.formBuilder.array([ this.createmMaterialTax(1) ])
    });
    
    this.getMaterialDetails(this.route.snapshot.params['id']);
    this.getUOMList();
    this.getMaterialTypeList();
    this.getPurchaseGroupActiveList();
    this.getPurchaseOrganizationActiveList();       
  }

  getMaterialDetails = function (id) {
    this.materialService.getMaterialDetails(id).subscribe(
      (data: any[]) => {
        this.material = data;
        
        console.log(this.material);
        if(this.material.is_sales==true)
        {
          this.addMaterialUom();
        }
        if(this.material.is_taxable==true)
        {
          this.is_taxable_value=true;

          this.addMateriaTax();
        }

        let material_purchase_org_arr = [];
        for (let i=0; i<this.material.material_purchase_org.length; i++)
        {
          material_purchase_org_arr.push(this.material.material_purchase_org[i].id);
        }
        this.material.material_purchase_org = material_purchase_org_arr;

        let material_purchase_grp_arr = [];
        for (let i=0; i<this.material.material_purchase_grp.length; i++)
        {
          material_purchase_grp_arr.push(this.material.material_purchase_grp[i].id);
        }
        this.material.material_purchase_grp = material_purchase_grp_arr;

        console.log(this.material);
      }
    );
  }

  getMaterialUom(form){
    return form.get('material_uom').controls
  }

  createmMaterialUom(for_id) {
    return this.formBuilder.group({
      material_for: for_id,
      base_uom: ['', Validators.required],
      unit_per_uom: ['', Validators.required],
      unit_uom: ['', Validators.required]
    });
  }

  addMaterialUom(){

    const control = <FormArray>this.form.controls['material_uom'];
    control.push(this.createmMaterialUom(2));

    // this.material_uom_arr = this.form.get('material_uom') as FormArray;
    // this.material_uom_arr.push(this.createmMaterialUom(2));
  }

  deleteMaterialUom(index:number)
  {
    const control = <FormArray>this.form.controls['material_uom'];
    control.removeAt(index);

    // this.material_uom_arr.controls.splice(index);
    // this.form.value.material_uom.splice(index);
  }

  showHideMaterialUOM()
  {
    if(this.form.value.is_sales!=true)
    {
      this.addMaterialUom();
      if(this.form.value.is_taxable==true)
      {
        this.addMateriaTax();
      }
    }
    else{
      this.deleteMaterialUom(1);
      if(this.form.value.is_taxable==true)
      {
        this.deleteMaterialTax(1);
      }
    }
  }

  createmMaterialTax(for_id) {
    return this.formBuilder.group({
      tax_for: for_id,
      igst: [''],
      cgst: [''],
      sgst: [''],
      hsn: ['']
    });
  }

  getMateriaTax(form){
    return form.get('material_tax').controls
  }

  addMateriaTax(){

    const control = <FormArray>this.form.controls['material_tax'];
    control.push(this.createmMaterialTax(2));

    // this.material_tax_arr = this.form.get('material_tax') as FormArray;
    // this.material_tax_arr.push(this.createmMaterialTax(2));
  }

  deleteMaterialTax(index:number)
  {
    const control = <FormArray>this.form.controls['material_tax'];
    control.removeAt(index);

    // this.material_tax_arr.controls.splice(index);
    // this.form.value.material_tax.splice(index);
  }

  showHideMaterialTax()
  {
    
    if(this.form.value.is_taxable!=true)
    {
      this.is_taxable_value = true;
      if(this.form.value.is_sales==true)
      {
        this.addMateriaTax();
      }
     
    }
    else{
      this.is_taxable_value = false;
      if(this.form.value.is_sales==true)
      {
        this.deleteMaterialTax(1);
      }
      
    }
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

  

  updateMaterial = function () {

    if (this.form.valid) {

      let material_purchase_org_arr = [];
      for (let i=0; i<this.form.value.material_purchase_org.length; i++)
      {
        material_purchase_org_arr.push({pur_org:this.form.value.material_purchase_org[i]});
      }

      let material_purchase_grp_arr = [];
      for (let i=0; i<this.form.value.material_purchase_grp.length; i++)
      {
        material_purchase_grp_arr.push({pur_group:this.form.value.material_purchase_grp[i]});
      }

      this.form.value.material_purchase_org = material_purchase_org_arr;
      this.form.value.material_purchase_grp = material_purchase_grp_arr;

      if(this.is_taxable_value==false)
      {
        this.form.value.material_tax = [];
      }

      
      this.materialService.updateMaterial(this.form.value,this.material).subscribe(
        response => {
          this.toastr.success('Material updated successfully', '', {
            timeOut: 3000,
          });
          this.goToList('material');          
        },
        error => {
          console.log('error', error)
          // this.toastr.error('everything is broken', '', {
          //   timeOut: 3000,
          // });
        }
      );
    } else {
      this.markFormGroupTouched(this.form)
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }

  goToList(toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  
  displayFieldCss(field: string) {
    return {
      'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
      'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
    };
  }

}
