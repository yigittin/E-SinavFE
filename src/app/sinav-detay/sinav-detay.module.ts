import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinavDetayRoutingModule } from './sinav-detay-routing.module';
import { SinavDetayComponent } from './sinav-detay.component';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SinavDetayComponent
  ],
  imports: [
    CommonModule,
    SinavDetayRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class SinavDetayModule { }
