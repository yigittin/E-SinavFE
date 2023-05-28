import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiniflarRoutingModule } from './siniflar-routing.module';
import { SiniflarComponent } from './siniflar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SiniflarComponent
  ],
  imports: [
    SharedModule,
    SiniflarRoutingModule
  ]
})
export class SiniflarModule { }
