import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinavRoutingModule } from './sinav-routing.module';
import { SinavComponent } from './sinav.component';
import { SharedModule } from '../shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SinavComponent
  ],
  imports: [
    SharedModule,
    SinavRoutingModule,
    NgbDatepickerModule
  ]
})
export class SinavModule { }
