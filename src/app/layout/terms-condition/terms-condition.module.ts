import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from '../bs-component/bs-component.module';
import { TermsConditionRoutingModule } from './terms-condition-routing.module';
import { TermsConditionComponent } from './terms-condition.component';
import { TermsConditionAddComponent } from './terms-condition-add/terms-condition-add.component';
import { TermsConditionEditComponent } from './terms-condition-edit/terms-condition-edit.component';
import { PageHeaderModule } from '../../shared';
import { TermsConditionService } from './terms-condition.service';
import { CompanyService } from '../company/company.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TermsConditionRoutingModule,
    PageHeaderModule,
    BsComponentModule,
    NgbModule.forRoot()
  ],
  declarations: [TermsConditionComponent, TermsConditionAddComponent, TermsConditionEditComponent],
  providers: [TermsConditionService,CompanyService]
})
export class TermsConditionModule { }
