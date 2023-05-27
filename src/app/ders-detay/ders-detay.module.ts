import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DersDetayRoutingModule } from './ders-detay-routing.module';
import { DersDetayComponent } from './ders-detay.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from '@abp/ng.theme.shared';
import { DersModule } from '../ders/ders.module';


@NgModule({
  declarations: [
    DersDetayComponent
  ],
  imports: [
    CommonModule,
    DersDetayRoutingModule,
  ]
})
export class DersDetayModule { }
