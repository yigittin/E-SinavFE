import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { query } from '@angular/animations';
import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BolumService } from '@proxy/bolumler';
import { DersInfoDto } from '@proxy/ders-dtos';
import { DersService } from '@proxy/dersler';
import { OgrenciSelectionDto } from '@proxy/ogrenci-dtos';
import { SinifInfoDto } from '@proxy/sinif-dtos';
import { Observable } from 'rxjs';
import { DersComponent } from '../ders/ders.component';
import { DersModule } from '../ders/ders.module';
import { DersRoutingModule } from '../ders/ders-routing.module';
import { DersDetayModule } from './ders-detay.module';

@Component({
  selector: 'app-ders-detay',
  templateUrl: './ders-detay.component.html',
  styleUrls: ['./ders-detay.component.scss']
})
export class DersDetayComponent implements OnInit{
  id:string;
  dersDetay: DersInfoDto;
  form:FormGroup;
  isOgrenciModalOpen=false;
  isSinifModalOpen=false;
  sinifList:SinifInfoDto[];
  ogrenciList:OgrenciSelectionDto[];

  constructor(
    injector:Injector,
    private dersService:DersService,
    private bolumService:BolumService,
    private fb:FormBuilder,
    private confirmation:ConfirmationService,
    private route:ActivatedRoute
  ){
    
  }

  async ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    await this.dersService.getDersSingleByIdById(this.id).subscribe(async (res)=>{
      this.dersDetay=res;
        await this.dersService.getDersOgrenciListByDersId(this.dersDetay.id).subscribe((res)=>{
          this.ogrenciList=res;
        })
    });    
  }

  async  bilgileriGetir(){
    // await this.dersService.getDersSiniflarByDersId(this.dersDetay.id).subscribe((res)=>{
    //   this.sinifList=res;
    // })
    await this.dersService.getOgrenciListByDersId(this.dersDetay.id).subscribe((res)=>{
      this.ogrenciList=res;
    })
  }
}
