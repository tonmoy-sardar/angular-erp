import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrganizationComponent } from './purchase-organization.component';
import { PurchaseOrganizationAddComponent } from './purchase-organization-add/purchase-organization-add.component';
const routes: Routes = [
  {
    path: '',
    component: PurchaseOrganizationComponent
  },
  {
    path: 'add-purchase-organization',
    component: PurchaseOrganizationAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrganizationRoutingModule { }
