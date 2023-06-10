import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeOgrenciRoutingModule } from './home-ogrenci-routing.module';
import { HomeOgrenciComponent } from './home-ogrenci.component';


@NgModule({
  declarations: [
    HomeOgrenciComponent
  ],
  imports: [
    CommonModule,
    HomeOgrenciRoutingModule
  ]
})
export class HomeOgrenciModule { }
