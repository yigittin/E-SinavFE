import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DersRoutingModule } from './ders-routing.module';
import { DersComponent } from './ders.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DersComponent
  ],
  imports: [
    SharedModule,
    DersRoutingModule
  ]
})
export class DersModule { }
