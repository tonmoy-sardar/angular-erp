import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from '../bs-component/bs-component.module';

import { BanksRoutingModule } from './banks-routing.module';
import { BanksComponent } from './banks.component';
import { BanksAddComponent } from './banks-add/banks-add.component';
import { BanksEditComponent } from './banks-edit/banks-edit.component';
import { PageHeaderModule } from '../../shared';
import { BanksService } from './banks.service';
import { CompanyService } from '../company/company.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BanksRoutingModule,
    PageHeaderModule,
    BsComponentModule,
    NgbModule.forRoot()
  ],
  declarations: [BanksComponent, BanksAddComponent, BanksEditComponent],
  providers: [BanksService,CompanyService]
})
export class BanksModule { }
