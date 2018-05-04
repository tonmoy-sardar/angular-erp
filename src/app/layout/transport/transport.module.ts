import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TransportRoutingModule } from './transport-routing.module';
import { TransportComponent } from './transport.component';
import { TransportAddComponent } from './transport-add/transport-add.component';
import { TransportEditComponent } from './transport-edit/transport-edit.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TransportRoutingModule,
    PageHeaderModule
  ],
  declarations: [TransportComponent, TransportAddComponent, TransportEditComponent]
})
export class TransportModule { }
