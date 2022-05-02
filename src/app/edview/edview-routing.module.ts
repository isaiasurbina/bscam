import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdviewPage } from './edview.page';

const routes: Routes = [
  {
    path: '',
    component: EdviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdviewPageRoutingModule {}
