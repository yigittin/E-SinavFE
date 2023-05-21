import { ListService, PagedResultDto } from '@abp/ng.core';
import { IdentityUserService } from '@abp/ng.identity/proxy';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BolumDropDownDto, BolumService } from '@proxy/bolumler';
import type { IdentityUserDto } from '@proxy/volo/abp/identity';
import { DersInfoDto } from '@proxy/ders-dtos';
import { DersService } from '@proxy/dersler';

@Component({
  selector: 'app-ders',
  templateUrl: './ders.component.html',
  styleUrls: ['./ders.component.scss'],
  providers:[ListService]
})
export class DersComponent {
    ders={items:[],totalCount:0} as PagedResultDto<DersInfoDto>;
    form:FormGroup;
    isModalOpen=false;
    selectedDers={} as DersInfoDto;
    bolumList:BolumDropDownDto[];
    constructor(
      public readonly list:ListService,
      private dersService:DersService,
      private bolumService:BolumService,
      private fb:FormBuilder,
      private confirmation:ConfirmationService
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

    buildForm(){
      this.form=this.fb.group({
        dersAdi:[this.selectedDers.dersAdi||'',Validators.required],
        isOnaylandi:false,
        bolumId:['',Validators.required],
        yetkiliId:[]
      })
    }


    save(){
      if(this.form.invalid){
        return;
      }
      
      if(this.selectedDers.id){
        this.dersService.updateDersByInput(this.form.value).subscribe(()=>{
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
