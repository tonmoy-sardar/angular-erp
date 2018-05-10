import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { PageHeaderModule } from '../../shared';
import { BsComponentModule } from '../bs-component/bs-component.module';
import { EmployeesService } from './employees.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeesRoutingModule,
    PageHeaderModule,
    NgbModule.forRoot(),
    BsComponentModule
  ],
  declarations: [EmployeesComponent, EmployeesAddComponent, EmployeesEditComponent],
  providers: [EmployeesService]
})
export class EmployeesModule { }
