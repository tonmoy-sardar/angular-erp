import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageHeaderComponent } from './page-header.component';
import { OnlyNumberDirective } from '../../../directive/only-number.directive';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [PageHeaderComponent,OnlyNumberDirective],
    exports: [PageHeaderComponent,OnlyNumberDirective]
})
export class PageHeaderModule {}
