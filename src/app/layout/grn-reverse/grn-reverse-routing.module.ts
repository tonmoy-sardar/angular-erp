import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrnReverseComponent } from './grn-reverse.component';
import { GrnReverseAddComponent } from './grn-reverse-add/grn-reverse-add.component';

const routes: Routes = [
  {
    path: '',
    component: GrnReverseComponent
  },
  {
    path: 'add',
    component: GrnReverseAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrnReverseRoutingModule { }
