import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdviewPageRoutingModule } from './edview-routing.module';

import { EdviewPage } from './edview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdviewPageRoutingModule
  ],
  declarations: [EdviewPage]
})
export class EdviewPageModule {}
