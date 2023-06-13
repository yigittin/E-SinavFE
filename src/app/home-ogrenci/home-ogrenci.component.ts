import { Component, OnInit } from '@angular/core';
import { SinavDto } from '@proxy/sinav-dtos';
import { SinavService } from '@proxy/sinavlar';

@Component({
  selector: 'app-home-ogrenci',
  templateUrl: './home-ogrenci.component.html',
  styleUrls: ['./home-ogrenci.component.scss']
})
export class HomeOgrenciComponent implements OnInit{
  sinavList:SinavDto[];
  constructor(
    private sinavService:SinavService
  ){}

  async ngOnInit(){
    await this.sinavService.getOgrenciSinav().subscribe(async (res)=>{
      this.sinavList=res;
    })
  }
}
