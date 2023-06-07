import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { DersService } from '@proxy/dersler';
import { OgrenciSinavDto } from '@proxy/sinav-dtos';
import { CevapService, SinavService } from '@proxy/sinavlar';

@Component({
  selector: 'app-sinav-ogrenci',
  templateUrl: './sinav-ogrenci.component.html',
  styleUrls: ['./sinav-ogrenci.component.scss']
})
export class SinavOgrenciComponent implements OnInit {
  id:string;
  sinavComplete:OgrenciSinavDto;
  form:FormGroup;

  constructor(
    private sinavService:SinavService,
    private dersService:DersService,
    private cevapService:CevapService,
    private fb:FormBuilder,
    private confirmation:ConfirmationService,
    private route:ActivatedRoute,


  ){}

  async ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    
    await this.bilgileriGetir();
  }

  async bilgileriGetir(){
    await this.sinavService.sinavBaslatBySinavId(this.id).subscribe(async (res)=>{
      await this.sinavService.getOgrenciSinavSureBySinavId(this.id).subscribe(async (res)=>{
        this.sinavComplete=res;
        console.log(this.sinavComplete);
      })
    })
  }
  radioButtonChange(data: MatRadioChange) {
    console.log(data.value);
}
}
