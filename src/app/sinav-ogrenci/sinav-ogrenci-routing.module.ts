import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinavOgrenciComponent } from './sinav-ogrenci.component';

const routes: Routes = [{ path: '', component: SinavOgrenciComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinavOgrenciRoutingModule { }
