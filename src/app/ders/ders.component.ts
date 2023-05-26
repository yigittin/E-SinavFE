import { ListService, PagedResultDto } from '@abp/ng.core';
import { IdentityUserService } from '@abp/ng.identity/proxy';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { query } from '@angular/animations';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BolumDropDownDto, BolumService } from '@proxy/bolumler';
import type { IdentityUserDto } from '@proxy/volo/abp/identity';
import { DersInfoDto } from '@proxy/ders-dtos';
import { DersService } from '@proxy/dersler';
import { DersDetayModule } from '../ders-detay/ders-detay.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ders',
  templateUrl: './ders.component.html',
  styleUrls: ['./ders.component.scss'],
  providers:[ListService],
})
export class DersComponent implements OnInit {
    ders={items:[],totalCount:0} as PagedResultDto<DersInfoDto>;
    form:FormGroup;
    isModalOpen=false;
    selectedDers={} as DersInfoDto;
    bolumList:BolumDropDownDto[];
    constructor(
      injector:Injector,
      public readonly list:ListService,
      private dersService:DersService,
      private bolumService:BolumService,
      private fb:FormBuilder,
      private confirmation:ConfirmationService,
      private route:ActivatedRoute
    ){}

    ngOnInit(){

      const dersStreamCreator=(query)=>this.dersService.getPagedDerslerByInputAndFilter(query);
      this.list.hookToQuery(dersStreamCreator).subscribe((response)=>{
        this.ders=response;
      })
    }
    getBolumList(){
      this.bolumService.getBolumDropdown().subscribe((res)=>{
        this.bolumList=res;
      });
    }
    createDers(){
      this.getBolumList();
      this.selectedDers={} as DersInfoDto;
      this.buildForm();
      this.isModalOpen=true;
    }

    editDers(id:string){
      this.getBolumList();
      this.dersService.getDersSingleByIdById(id).subscribe((Ders)=>{
        this.selectedDers=Ders;
        this.buildForm();
        this.isModalOpen=true;
      });
    }
    buildForm(){
      this.form=this.fb.group({
        dersAdi:[this.selectedDers.dersAdi||'',Validators.required],
        isOnaylandi:[this.selectedDers.isOnaylandi||false],
        bolumId:[this.selectedDers.bolumId||'',Validators.required],
        yetkiliId:[],
        id:[this.selectedDers.id||null]
      })
    }

    delete(id:string){
      this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure')
        .subscribe((status)=>{
          if(status===Confirmation.Status.confirm){
            this.dersService.delete(id).subscribe(()=>this.list.get());
          }
        })
    }

    onaylama(id:string){
      this.confirmation.info('Onaylıyorsunuz','Emin misiniz?')
        .subscribe((status)=>{
          if(status===Confirmation.Status.confirm){
            this.dersService.dersOnaylaByGuidDers(id).subscribe(()=>this.list.get());
          }
        })
    }

    save(){
      if(this.form.invalid){
        return;
      }
      
      if(this.selectedDers.id){
        this.dersService.updateDersInfoByInput(this.form.value).subscribe(()=>{
          this.isModalOpen=false;
          this.form.reset();
          this.list.get();
        })
      }else{
        this.dersService.createDersByInput(this.form.value).subscribe(()=>{
          this.isModalOpen=false;
          this.form.reset();
          this.list.get();
        })
      }
    }
  }
