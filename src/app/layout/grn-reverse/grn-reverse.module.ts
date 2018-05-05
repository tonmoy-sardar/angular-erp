import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrnReverseRoutingModule } from './grn-reverse-routing.module';
import { GrnReverseComponent } from './grn-reverse.component';
import { GrnReverseAddComponent } from './grn-reverse-add/grn-reverse-add.component';
import { GrnReverseEditComponent } from './grn-reverse-edit/grn-reverse-edit.component';

@NgModule({
  imports: [
    CommonModule,
    GrnReverseRoutingModule
  ],
  declarations: [GrnReverseComponent, GrnReverseAddComponent, GrnReverseEditComponent]
})
export class GrnReverseModule { }
