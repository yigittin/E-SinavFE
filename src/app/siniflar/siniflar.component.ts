import { ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DersDropDownDto } from '@proxy/ders-dtos/models';
import { DersService } from '@proxy/dersler';
import { SinifInfoDto } from '@proxy/sinif-dtos';
import { SinifService } from '@proxy/siniflar';

@Component({
  selector: 'app-siniflar',
  templateUrl: './siniflar.component.html',
  styleUrls: ['./siniflar.component.scss'],
  providers:[ListService]
})
export class SiniflarComponent implements OnInit {
  sinif={items:[],totalCount:0} as PagedResultDto<SinifInfoDto>;
  form:FormGroup;
  isModalOpen=false;
  selectedSinif={} as SinifInfoDto;
  dersList:DersDropDownDto[];

  constructor(
    public readonly list:ListService,
    private dersService:DersService,
    private sinifService:SinifService,
    private fb:FormBuilder,
    private confirmation:ConfirmationService,
    private route:ActivatedRoute
  ){}

  ngOnInit(){
    const sinifStreamCreator=(query)=>this.sinifService.getPagedSiniflarByInputAndFilter(query);
    this.list.hookToQuery(sinifStreamCreator).subscribe((response)=>{
      this.sinif=response;
    });
  }
  getDersList(){
    this.dersService.getDersDropdown().subscribe((res)=>{
      this.dersList=res;
    });
  }
  createSinif(){
    this.getDersList();
    this.selectedSinif={} as SinifInfoDto;
    this.buildForm();
    this.isModalOpen=true;
  }
  editSinif(id:string){
    this.getDersList();
    this.sinifService.getSinifSingleById(id).subscribe((res)=>{
      this.selectedSinif=res;
      this.buildForm();
      this.isModalOpen=true;
    });
  }
  delete(id:string){
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure')
      .subscribe((status)=>{
        if(status===Confirmation.Status.confirm){
          this.sinifService.delete(id).subscribe(()=>this.list.get());
        }
      })
  }
  onaylama(id:string){
    this.confirmation.info('Onaylıyorsunuz','Emin misiniz?')
      .subscribe((status)=>{
        if(status===Confirmation.Status.confirm){
          this.sinifService.sinifOnaylaByGuidSinif(id).subscribe(()=>this.list.get());
        }
      })
  }
  buildForm(){
    this.form=this.fb.group({
      id:[this.selectedSinif.id||null],
      sinifAdi:[this.selectedSinif.sinifAdi||'',Validators.required],
      sinifLimit:[this.selectedSinif.sinifLimit||'',Validators.required],
      isOnaylandi:[this.selectedSinif.isOnaylandi||false],
      dersId:[this.selectedSinif.dersId||'',Validators.required],
      yetkiliId:[]
    });
  }
  save(){
    if(this.form.invalid){
      return;
    }    
    if(this.selectedSinif.id){
      this.sinifService.updateSinifCustomByInput(this.form.value).subscribe(()=>{
        this.isModalOpen=false;
        this.form.reset();
        this.list.get();
      })
    }else{
      this.sinifService.createSinifByInput(this.form.value).subscribe(()=>{
        this.isModalOpen=false;
        this.form.reset();
        this.list.get();
      })
    }
  }
}
