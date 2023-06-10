import { AuthService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
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
    ) {}

  login() {
    this.authService.navigateToLogin();
  }

  ngOnInit(){
    this.dersService.dersAnasayfa().subscribe();
  }
  
}
