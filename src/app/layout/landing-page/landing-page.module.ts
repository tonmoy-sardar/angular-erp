import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';

import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    PageHeaderModule,
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
