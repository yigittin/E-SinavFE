import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OgrenciComponent } from './ogrenci.component';

const routes: Routes = [{ path: '', component: OgrenciComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OgrenciRoutingModule { }
