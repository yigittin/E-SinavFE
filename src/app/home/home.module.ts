import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DersRoutingModule } from '../ders/ders-routing.module';
import { SiniflarRoutingModule } from '../siniflar/siniflar-routing.module';
import { BolumRoutingModule } from '../bolum/bolum-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule,DersRoutingModule,SiniflarRoutingModule,BolumRoutingModule],
})
export class HomeModule {}
