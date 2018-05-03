import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseRequisitionComponent } from './purchase-requisition.component';
import { PurchaseRequisitionAddComponent } from './purchase-requisition-add/purchase-requisition-add.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseRequisitionComponent
  },
  {
    path: 'add-purchase-requisition',
    component: PurchaseRequisitionAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRequisitionRoutingModule { }
