import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BanksRoutingModule } from './banks-routing.module';
import { BanksComponent } from './banks.component';
import { BanksAddComponent } from './banks-add/banks-add.component';
import { BanksEditComponent } from './banks-edit/banks-edit.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BanksRoutingModule,
    PageHeaderModule
  ],
  declarations: [BanksComponent, BanksAddComponent, BanksEditComponent]
})
export class BanksModule { }
