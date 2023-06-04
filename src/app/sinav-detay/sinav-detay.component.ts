import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DersService } from '@proxy/dersler';
import { CevapDto, CreateUpdateCevapDto, CreateUpdateSoruDto, SinavDto, SoruDto } from '@proxy/sinav-dtos';
import { CevapService, SinavService, SoruService } from '@proxy/sinavlar';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sinav-detay',
  templateUrl: './sinav-detay.component.html',
  styleUrls: ['./sinav-detay.component.scss']
})
export class SinavDetayComponent implements OnInit{
  closeResult='';
  id:string;
  sinavDetay:SinavDto;
  form:FormGroup;
  isSoruModalOpen=false;
  soruList:SoruDto[];
  newSoru:CreateUpdateSoruDto;
  newCevap:CreateUpdateCevapDto;
  cevapList:CevapDto[];
  selectedSoru={} as SoruDto;
  constructor(
    private sinavService:SinavService,
    private soruService:SoruService,
    private cevapService:CevapService,
    private dersService:DersService,
    private fb:FormBuilder,
    private confirmation:ConfirmationService,
    private route:ActivatedRoute,
    private modalService:NgbModal
  ){}

  async ngOnInit(){
    this.id=this.route.snapshot.params['id'];

    await this.bilgileriGetir();
  }

  async bilgileriGetir(){
    await this.sinavService.getSinavSingleById(this.id).subscribe(async (res)=>{
      this.sinavDetay=res;
      this.soruService.getSoruListBySinavIdById(this.id).subscribe( async (res)=>{
        this.soruList=res;
      })
    })
  }

  buildForm(){
    this.form=this.fb.group({
      soruMetni:[],
      puan:[],
      sinavId:[this.id]
    })
  }
  async open(content) {
    this.buildForm();
    this.contentGet(content);
	}
  async openCevap(contentCevap){
    this.contentCevapGet(contentCevap);
  }
  contentGet(content){    
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then();
  }
  contentCevapGet(contentCevap){    
    this.modalService.open(contentCevap, { ariaLabelledBy: 'cevapModal' }).result.then();
  }

  async save(){
    if(this.form.invalid){
      return;
    }
    await this.soruService.createUpdateSoruByInput(this.form.value).subscribe(()=>{
      this.form.reset();
      this.bilgileriGetir()
    })
  }
}
