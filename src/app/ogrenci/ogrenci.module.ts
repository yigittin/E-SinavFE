import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OgrenciRoutingModule } from './ogrenci-routing.module';
import { OgrenciComponent } from './ogrenci.component';


@NgModule({
  declarations: [
    OgrenciComponent
  ],
  imports: [
    CommonModule,
    OgrenciRoutingModule
  ]
})
export class OgrenciModule { }
