import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from '../bs-component/bs-component.module';
import { TransportRoutingModule } from './transport-routing.module';
import { TransportComponent } from './transport.component';
import { TransportAddComponent } from './transport-add/transport-add.component';
import { TransportEditComponent } from './transport-edit/transport-edit.component';
import { PageHeaderModule } from '../../shared';
import { TransportService } from './transport.service';
import { CompanyService } from '../company/company.service';
import { StatesService} from '../states/states.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TransportRoutingModule,
    PageHeaderModule,
    BsComponentModule,
    NgbModule.forRoot()
  ],
  declarations: [TransportComponent, TransportAddComponent, TransportEditComponent],
  providers: [TransportService,CompanyService,StatesService]
})
export class TransportModule { }
