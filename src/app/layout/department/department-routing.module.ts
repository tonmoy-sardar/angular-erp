import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';

const routes: Routes = [
  {
  path: '',
  component: DepartmentComponent
  },
  {
    path: 'add',
    component: DepartmentAddComponent
  },
  {
    path: 'edit/:id',
    component: DepartmentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
