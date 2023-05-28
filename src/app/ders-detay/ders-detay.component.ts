import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService, ModalComponent } from '@abp/ng.theme.shared';
import { query } from '@angular/animations';
import { Component, Injectable, Injector, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BolumService } from '@proxy/bolumler';
import { DersInfoDto } from '@proxy/ders-dtos';
import { DersService } from '@proxy/dersler';
import { OgrenciSelectionDto } from '@proxy/ogrenci-dtos';
import { SinifInfoDto } from '@proxy/sinif-dtos';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ders-detay',
  templateUrl: './ders-detay.component.html',
  styleUrls: ['./ders-detay.component.scss'],
})
export class DersDetayComponent implements OnInit{
  closeResult = '';
  id:string;
  dersDetay: DersInfoDto;
  form:FormGroup;
  isOgrenciModalOpen=false;
  isSinifModalOpen=false;
  sinifList:SinifInfoDto[];
  ogrenciList:OgrenciSelectionDto[];
  ogrenciSelectionList:OgrenciSelectionDto[];
  selectedRowIds: Set<string> = new Set<string>();
  constructor(
    injector:Injector,
    private dersService:DersService,
    private bolumService:BolumService,
    private fb:FormBuilder,
    private confirmation:ConfirmationService,
    private route:ActivatedRoute,
    private modalService: NgbModal
  ){
    
  }

  async ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    await this.dersService.getDersSingleByIdById(this.id).subscribe(async (res)=>{
      this.dersDetay=res;

    });    
  }
  async open(content) {
    await this.dersService.getOgrenciListByDersId(this.dersDetay.id).subscribe((res)=>{
      this.ogrenciSelectionList=res;
    });
    this.contentGet(content);
	}
  contentGet(content){
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then();
  }
  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
  async  bilgileriGetir(){
    // await this.dersService.getDersSiniflarByDersId(this.dersDetay.id).subscribe((res)=>{
    //   this.sinifList=res;
    // })
    await this.dersService.getOgrenciListByDersId(this.dersDetay.id).subscribe((res)=>{
      this.ogrenciList=res;
    })
  }

  saveOgrenci(){

  }
  addOgrenci(){
    this.isOgrenciModalOpen=true;
  }
  selectedId: string;

  onRowClick(id: string) {
    if(this.selectedRowIds.has(id)) {
     this.selectedRowIds.delete(id);
    }
    else {
      this.selectedRowIds.add(id);
    }

    console.log(this.selectedRowIds);
  }

  rowIsSelected(id: string) {
    return this.selectedRowIds.has(id);
  }

  getSelectedRows(){
    return this.ogrenciList.filter(x => this.selectedRowIds.has(x.userId));
  }
}
