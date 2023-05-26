import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DersDetayRoutingModule } from './ders-detay-routing.module';
import { DersDetayComponent } from './ders-detay.component';


@NgModule({
  declarations: [
    DersDetayComponent
  ],
  imports: [
    CommonModule,
    DersDetayRoutingModule
  ]
})
export class DersDetayModule { }
