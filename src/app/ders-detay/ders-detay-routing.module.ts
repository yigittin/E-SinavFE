import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DersDetayComponent } from './ders-detay.component';

const routes: Routes = [{ path: '', component: DersDetayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DersDetayRoutingModule { }
