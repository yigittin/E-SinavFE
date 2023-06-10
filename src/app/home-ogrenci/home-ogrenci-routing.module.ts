import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOgrenciComponent } from './home-ogrenci.component';

const routes: Routes = [{ path: '', component: HomeOgrenciComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeOgrenciRoutingModule { }
