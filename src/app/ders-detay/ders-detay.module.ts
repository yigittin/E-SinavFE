import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DersDetayRoutingModule } from './ders-detay-routing.module';
import { DersDetayComponent } from './ders-detay.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent, ThemeSharedModule } from '@abp/ng.theme.shared';
import { DersModule } from '../ders/ders.module';
import { FormControl } from '@angular/forms';
import { ValidationErrorModule } from '@abp/ng.theme.lepton-x';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Injectable({providedIn:DersModule})
@NgModule({
  declarations: [
    DersDetayComponent
  ],
  imports: [
    CommonModule,
    DersDetayRoutingModule,
    NgbDatepickerModule
  ]
})
export class DersDetayModule { }
