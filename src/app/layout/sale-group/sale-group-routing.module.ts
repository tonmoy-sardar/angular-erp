import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleGroupComponent } from './sale-group.component';
import { SaleGroupAddComponent } from './sale-group-add/sale-group-add.component';

const routes: Routes = [
  {
    path: '',
    component: SaleGroupComponent
  },
  {
    path: 'add-purchase-group',
    component: SaleGroupAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleGroupRoutingModule { }
