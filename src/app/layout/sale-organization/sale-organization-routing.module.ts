import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleOrganizationComponent } from './sale-organization.component';
import { SaleOrganizationAddComponent } from './sale-organization-add/sale-organization-add.component';

const routes: Routes = [{
  path: '',
  component: SaleOrganizationComponent
},
{
  path: 'add-sale-organization',
  component: SaleOrganizationAddComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleOrganizationRoutingModule { }
