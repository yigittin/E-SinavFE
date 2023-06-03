import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinavDetayComponent } from './sinav-detay.component';

const routes: Routes = [{ path: '', component: SinavDetayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinavDetayRoutingModule { }
