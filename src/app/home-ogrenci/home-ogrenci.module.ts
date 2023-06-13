import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeOgrenciRoutingModule } from './home-ogrenci-routing.module';
import { HomeOgrenciComponent } from './home-ogrenci.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeOgrenciComponent
  ],
  imports: [
    SharedModule,
    HomeOgrenciRoutingModule,
    RouterModule
  ]
})
export class HomeOgrenciModule { }
