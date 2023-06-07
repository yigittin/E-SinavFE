import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinavOgrenciRoutingModule } from './sinav-ogrenci-routing.module';
import { SinavOgrenciComponent } from './sinav-ogrenci.component';


@NgModule({
  declarations: [
    SinavOgrenciComponent
  ],
  imports: [
    CommonModule,
    SinavOgrenciRoutingModule
  ]
})
export class SinavOgrenciModule { }
