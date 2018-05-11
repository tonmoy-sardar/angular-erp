import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../company/company.service';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.scss']
})
export class MaterialEditComponent implements OnInit {
  material;
  UOMList;

  constructor(private materialService: MaterialService, private companyService: CompanyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.material = {
      material_name: '',
      base_uom:0,
      unit_per_uom:'',
      unit_uom:0
    };
    this.getUOMList();
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  getUOMList= function(){
    this.companyService.getUOMList().subscribe(
      (data: any[]) =>{   
        this.UOMList = data['results'];
        console.log(this.UOMList);
      }
     );
  };

}
