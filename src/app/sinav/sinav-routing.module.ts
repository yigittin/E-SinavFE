import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinavComponent } from './sinav.component';

const routes: Routes = [{ path: '', component: SinavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinavRoutingModule { }
