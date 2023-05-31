import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BolumService } from '@proxy/bolumler';
import { DersService } from '@proxy/dersler';
import { OgrenciSelectionDto } from '@proxy/ogrenci-dtos';
import { SinifInfoDto } from '@proxy/sinif-dtos';
import { SinifService } from '@proxy/siniflar';

@Component({
  selector: 'app-sinif-detay',
  templateUrl: './sinif-detay.component.html',
  styleUrls: ['./sinif-detay.component.scss']
})
export class SinifDetayComponent implements OnInit{
  id:string;
  sinifDetay:SinifInfoDto;
  ogrenciList:OgrenciSelectionDto[];
  ogrenciSelectionList:OgrenciSelectionDto[];

  constructor(    
    private dersService:DersService,
    private bolumService:BolumService,
    private sinifService:SinifService,
    private fb:FormBuilder,
    private confirmation:ConfirmationService,
    private route:ActivatedRoute,){
  }
  async ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    await this.bilgileriGetir();
  }
  async bilgileriGetir(){
    await this.sinifService.getSinifSingleById(this.id).subscribe((res)=>{
      this.sinifDetay=res;
    })
  }
}
