import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { BolumRoutingModule } from './bolum-routing.module';
import { BolumComponent } from './bolum.component';


@NgModule({
  declarations: [
    BolumComponent
  ],
  imports: [
    SharedModule,
    BolumRoutingModule
  ]
})
export class BolumModule { }
