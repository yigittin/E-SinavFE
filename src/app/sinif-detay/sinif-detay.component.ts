import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BolumService } from '@proxy/bolumler';
import { DersService } from '@proxy/dersler';
import { OgrenciSelectionDto } from '@proxy/ogrenci-dtos';
import { SinifInfoDto } from '@proxy/sinif-dtos';
import { SinifService } from '@proxy/siniflar';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sinif-detay',
  templateUrl: './sinif-detay.component.html',
  styleUrls: ['./sinif-detay.component.scss']
})
export class SinifDetayComponent implements OnInit{
  id:string;
  sinifDetay:SinifInfoDto;
  ogrenciList:OgrenciSelectionDto[];
  ogrenciSelectionList:OgrenciSelectionDto[];
  selectedRowIds: Set<string> = new Set<string>();
  constructor(    
    private dersService:DersService,
    private bolumService:BolumService,
    private sinifService:SinifService,
    private fb:FormBuilder,
    private confirmation:ConfirmationService,
    private route:ActivatedRoute,
    private modalService: NgbModal){
  }
  async ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    await this.bilgileriGetir();
  }
  async bilgileriGetir(){
    await this.sinifService.getSinifSingleById(this.id).subscribe((res)=>{
      this.sinifDetay=res;
      this.sinifService.sinifOgrenciListByGuidSinif(this.id).subscribe((res)=>{
        this.ogrenciList=res;
      })
    })
  }
  async open(content) {
    await this.sinifService.getOgrenciListBySinifIdAndDersId(this.sinifDetay.id,this.sinifDetay.dersId).subscribe((res)=>{
      this.ogrenciSelectionList=res;
    });
    this.contentGet(content);
	}
  contentGet(content){
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then();
  }
  async addOgrenci(){
    let idList=Array.from(this.selectedRowIds);
    this.sinifService.sinifOgrenciEkleMultiByListAndGuidSinif(idList,this.sinifDetay.id).subscribe();
    await this.bilgileriGetir();
    this.selectedRowIds.clear();
  }
  selectedId: string;

  onRowClick(id: string) {
    if(this.selectedRowIds.has(id)) {
     this.selectedRowIds.delete(id);
    }
    else {
      this.selectedRowIds.add(id);
    }
  }

  rowIsSelected(id: string) {
    return this.selectedRowIds.has(id);
  }

  getSelectedRows(){
    return this.ogrenciList.filter(x => this.selectedRowIds.has(x.userId));
  }
}
