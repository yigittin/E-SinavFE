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
  currentUser:any;
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
    private _router:Router,
    
    ) {}

  login() {
    this.authService.navigateToLogin();
  }

  ngOnInit(){
    this.currentUser = this.config.getOne("currentUser");
    if(this.currentUser.id!=null){
      var isOgrenci:Boolean;
       this.dersService.getIsOgrenci().subscribe((res)=>{
        isOgrenci=res;
        if(isOgrenci===true){
          this.navigateToFirst();
        }
      })
      this.dersService.getDersAnasayfa().subscribe((res)=>{
        this.dersList=res;
      })
      this.bolumService.bolumAnasayfa().subscribe((res)=>{
        this.bolumList=res;
      })
      this.sinifService.sinifAnasayfa().subscribe((res)=>{
        this.sinifList=res;
      })
      this.sinavService.sinavAnasayfa().subscribe((res)=>{
        this.sinavList=res;
      })
    }
  }
  navigateToFirst() {
    this._router.navigateByUrl('/home-ogrenci');
  }
}
