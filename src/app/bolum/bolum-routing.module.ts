import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolumComponent } from './bolum.component';

const routes: Routes = [{ path: '', component: BolumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolumRoutingModule { }
