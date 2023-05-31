import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinifDetayComponent } from './sinif-detay.component';

const routes: Routes = [{ path: '', component: SinifDetayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinifDetayRoutingModule { }
