import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinavOgrenciRoutingModule } from './sinav-ogrenci-routing.module';
import { SinavOgrenciComponent } from './sinav-ogrenci.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    SinavOgrenciComponent
  ],
  imports: [
    CommonModule,
    SinavOgrenciRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatRadioModule
  ]
})
export class SinavOgrenciModule { }
