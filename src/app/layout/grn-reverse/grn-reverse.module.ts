import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GrnReverseRoutingModule } from './grn-reverse-routing.module';
import { GrnReverseComponent } from './grn-reverse.component';
import { GrnReverseAddComponent } from './grn-reverse-add/grn-reverse-add.component';
import { GrnReverseEditComponent } from './grn-reverse-edit/grn-reverse-edit.component';
import { PageHeaderModule } from '../../shared';
import { BsComponentModule } from '../bs-component/bs-component.module';

import { GrnReverseService } from './grn-reverse.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    GrnReverseRoutingModule,
    PageHeaderModule,
    BsComponentModule
  ],
  declarations: [GrnReverseComponent, GrnReverseAddComponent, GrnReverseEditComponent],
  providers: [GrnReverseService]
})
export class GrnReverseModule { }
