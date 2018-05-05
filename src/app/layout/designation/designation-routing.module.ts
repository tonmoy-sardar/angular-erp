import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignationComponent } from './designation.component';
import { DesignationAddComponent } from './designation-add/designation-add.component';
import { DesignationEditComponent } from './designation-edit/designation-edit.component';

const routes: Routes = [
  {
  path: '',
  component: DesignationComponent
  },
  {
    path: 'add',
    component: DesignationAddComponent
  },
  {
    path: 'edit/:id',
    component: DesignationEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
