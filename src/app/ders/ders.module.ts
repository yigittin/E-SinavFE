import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DersRoutingModule } from './ders-routing.module';
import { DersComponent } from './ders.component';
import { SharedModule } from '../shared/shared.module';
import { DersDetayComponent } from '../ders-detay/ders-detay.component';
import { DersDetayRoutingModule } from '../ders-detay/ders-detay-routing.module';
import { DersDetayModule } from '../ders-detay/ders-detay.module';

@NgModule({
  declarations: [
    DersComponent,
    
  ],
  imports: [
    SharedModule,
    DersRoutingModule
  ]
})
export class DersModule { 

}
