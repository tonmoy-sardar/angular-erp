import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TermsConditionRoutingModule } from './terms-condition-routing.module';
import { TermsConditionComponent } from './terms-condition.component';
import { TermsConditionAddComponent } from './terms-condition-add/terms-condition-add.component';
import { TermsConditionEditComponent } from './terms-condition-edit/terms-condition-edit.component';
import { PageHeaderModule } from '../../shared';
import { TermsConditionService } from './terms-condition.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TermsConditionRoutingModule,
    PageHeaderModule
  ],
  declarations: [TermsConditionComponent, TermsConditionAddComponent, TermsConditionEditComponent],
  providers: [TermsConditionService]
})
export class TermsConditionModule { }
