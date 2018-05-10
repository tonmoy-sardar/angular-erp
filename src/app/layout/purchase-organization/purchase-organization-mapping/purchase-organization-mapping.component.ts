import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PurchaseOrganizationService } from '../purchase-organization.service';
import { BranchAddComponent } from '../../company/branch-add/branch-add.component';

@Component({
  selector: 'app-purchase-organization-mapping',
  templateUrl: './purchase-organization-mapping.component.html',
  styleUrls: ['./purchase-organization-mapping.component.scss']
})
export class PurchaseOrganizationMappingComponent implements OnInit {
  companyBranchTree;

  constructor(private purchaseOrganizationService: PurchaseOrganizationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getCompanyBranchTree(this.route.snapshot.params['id']);
  }

  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  getCompanyBranchTree= function(id){
    this.purchaseOrganizationService.getCompanyBranchTree(id).subscribe(
      (data: any[]) =>{   
        this.companyBranchTree = data['results'];
        console.log(this.companyBranchTree);
      }
     );
  };
  
  updatePurchaseOrganizationMapping = function(){

    

    for(var i=0; i<this.companyBranchTree.length;i++)
    {

      if(this.companyBranchTree[i].company_branch.filter(item => { return item.checked; }).length>0)
      {
        var checkedBranch = this.companyBranchTree[i].company_branch.filter(item => { return item.checked; });
        if(checkedBranch.length>0)
        { 
            for(var j=0; j<checkedBranch.length;j++)
            {
              var date = {
                pur_org:this.route.snapshot.params['id'],
                branch:checkedBranch[j].id
              };
              this.setPurchaseOrganizationCompanyBranchMapping(date);
            }
        }
      }

    }
  }

  setPurchaseOrganizationCompanyBranchMapping = function(data){
    this.purchaseOrganizationService.setPurchaseOrganizationCompanyBranchMapping(data).subscribe(
      response => {
        
      },
      error => console.log('error',error)
    );
  }

}
