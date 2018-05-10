import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GrnRoutingModule } from './grn-routing.module';
import { GrnComponent } from './grn.component';
import { GrnAddComponent } from './grn-add/grn-add.component';
import { PageHeaderModule } from '../../shared';

import { BsComponentModule } from '../bs-component/bs-component.module';
import { GrnService } from './grn.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    GrnRoutingModule,
    PageHeaderModule,
    BsComponentModule
  ],
  declarations: [GrnComponent, GrnAddComponent],
  providers: [GrnService]
})
export class GrnModule { }
