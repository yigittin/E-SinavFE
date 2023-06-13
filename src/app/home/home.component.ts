import { AuthService, ConfigStateService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BolumInfoDto, BolumService } from '@proxy/bolumler';
import { DersInfoDto } from '@proxy/ders-dtos';
import { DersService } from '@proxy/dersler';
import { SinavDto } from '@proxy/sinav-dtos';
import { SinavService } from '@proxy/sinavlar';
import { SinifInfoDto } from '@proxy/sinif-dtos';
import { SinifService } from '@proxy/siniflar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dersList:DersInfoDto[];
  sinifList:SinifInfoDto[];
  bolumList:BolumInfoDto[];
  sinavList:SinavDto[];
  isOgrenci:boolean;
  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  constructor(
    private authService: AuthService,
    private dersService:DersService,
    private sinifService:SinifService,
    private sinavService:SinavService,
    private bolumService:BolumService,
    private config:ConfigStateService,
    private _router:Router
    ) {}

  login() {
    this.authService.navigateToLogin();
  }

  async ngOnInit(){
    var isOgrenci:Boolean;
    await this.dersService.getIsOgrenci().subscribe((res)=>{
      isOgrenci=res;
      if(isOgrenci===true){
        this.navigateToFirst();
      }
    })
    await this.dersService.getDersAnasayfa().subscribe(async (res)=>{
      this.dersList=res;
    })
    await this.bolumService.bolumAnasayfa().subscribe(async (res)=>{
      this.bolumList=res;
    })
    await this.sinifService.sinifAnasayfa().subscribe(async (res)=>{
      this.sinifList=res;
    })
    await this.sinavService.sinavAnasayfa().subscribe(async (res)=>{
      this.sinavList=res;
    })
    console.log(isOgrenci);
  }
  navigateToFirst() {
    this._router.navigateByUrl('/home-ogrenci');
  }
}
