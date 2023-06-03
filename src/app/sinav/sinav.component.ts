import { ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DersDropDownDto } from '@proxy/ders-dtos';
import { DersService } from '@proxy/dersler';
import { SinavDto } from '@proxy/sinav-dtos';
import { SinavService } from '@proxy/sinavlar';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sinav',
  templateUrl: './sinav.component.html',
  styleUrls: ['./sinav.component.scss'],
  providers:[ ListService,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class SinavComponent implements OnInit {
  sinav={items:[],totalCount:0} as PagedResultDto<SinavDto>;
  form:FormGroup;
  isModalOpen=false;
  selectedSinav={} as SinavDto;
  dersList:DersDropDownDto[];
  constructor(
    public readonly list:ListService,
    private sinavService:SinavService,
    private dersService:DersService,
    private fb:FormBuilder,
    private confirmation:ConfirmationService,
    private route:ActivatedRoute
  ){}

  ngOnInit() {
    const sinavStreamCreator=(query)=>this.sinavService.getPagedSiniflarByInputAndFilter(query);
    this.list.hookToQuery(sinavStreamCreator).subscribe((response)=>{
      this.sinav=response;
    });
  }
  getDersList(){
    this.dersService.getDersDropdown().subscribe((res)=>{
      this.dersList=res;
    })
  }

  createSinav(){
    this.getDersList();
    this.selectedSinav={} as SinavDto;
    this.buildForm();
    this.isModalOpen=true;
  }
  editSinav(id:string){
    this.getDersList();
    this.sinavService.getSinavSingleById(id).subscribe((res)=>{
      this.selectedSinav=res;
      this.buildForm();
      this.isModalOpen=true;
    })
  }

  buildForm(){
    this.form=this.fb.group({
      sinavAdi:[this.selectedSinav.sinavAdi||'',Validators.required],
      sinavSure:[this.selectedSinav.sinavSure||null,Validators.required],
      baslangicTarih:[this.selectedSinav.baslangicTarih||null,Validators.required],
      dersId:[this.selectedSinav.dersId||'',Validators.required],
      agirlik:[this.selectedSinav.agirlik||null,Validators.required],
      id:[this.selectedSinav.id||null]
    })
  }

  delete(id:string){
    this.confirmation.warn('::AreYouSureToDelete','::AreYouSure')
      .subscribe((status)=>{
        if(status===Confirmation.Status.confirm){
          this.sinavService.deleteSinavById(id).subscribe(()=>this.list.get());
        }
      })
  }

  save(){
    if(this.form.invalid){
      return;
    }
    this.sinavService.createUpdateSinavByInput(this.form.value).subscribe(()=>{
      this.isModalOpen=false;
      this.form.reset();
      this.list.get();
    })  
  }

}
