import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseGroupComponent } from './purchase-group.component';
import { PurchaseGroupAddComponent } from './purchase-group-add/purchase-group-add.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseGroupComponent
  },
  {
    path: 'add-purchase-group',
    component: PurchaseGroupAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseGroupRoutingModule { }
