import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiniflarComponent } from './siniflar.component';

const routes: Routes = [{ path: '', component: SiniflarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiniflarRoutingModule { }
