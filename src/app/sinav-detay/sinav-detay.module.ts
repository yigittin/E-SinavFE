import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinavDetayRoutingModule } from './sinav-detay-routing.module';
import { SinavDetayComponent } from './sinav-detay.component';


@NgModule({
  declarations: [
    SinavDetayComponent
  ],
  imports: [
    CommonModule,
    SinavDetayRoutingModule
  ]
})
export class SinavDetayModule { }
