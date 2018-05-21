import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsComponentModule } from '../bs-component/bs-component.module';
import { StatesRoutingModule } from './states-routing.module';
import { StatesComponent } from './states.component';
import { StatesAddComponent } from './states-add/states-add.component';
import { StatesEditComponent } from './states-edit/states-edit.component';
import { PageHeaderModule } from '../../shared';
import { StatesService } from './states.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    StatesRoutingModule,
    PageHeaderModule,
    BsComponentModule
  ],
  declarations: [StatesComponent, StatesAddComponent, StatesEditComponent],
  providers: [StatesService]
})
export class StatesModule { }
