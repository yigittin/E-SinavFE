import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinifDetayRoutingModule } from './sinif-detay-routing.module';
import { SinifDetayComponent } from './sinif-detay.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SinifDetayComponent
  ],
  imports: [
    SharedModule,
    SinifDetayRoutingModule
  ]
})
export class SinifDetayModule { }
