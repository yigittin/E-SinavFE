import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DersComponent } from './ders.component';
import { DersDetayComponent } from '../ders-detay/ders-detay.component';

const routes: Routes = [{ path: '', component: DersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DersRoutingModule { }
