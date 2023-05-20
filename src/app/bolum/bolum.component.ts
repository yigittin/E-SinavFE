import { Component,OnInit } from '@angular/core';
import { ListService,PagedResultDto } from '@abp/ng.core';
import { BolumService,BolumDto,BolumInfoDto } from '@proxy/bolumler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
@Component({
  selector:'app-bolum',
  templateUrl:'./bolum.component.html',
  styleUrls:['./bolum.component.scss'],
  providers:[ListService]
})
export class BolumComponent {
  bolum={items:[],totalCount:0} as PagedResultDto<BolumInfoDto>;
  form: FormGroup;
  isModalOpen = false; 
  selectedBolum= {} as BolumInfoDto;
  constructor(public readonly list: ListService,private bolumService:BolumService,private fb:FormBuilder){}
  ngOnInit(){
    const bolumStreamCreator=(query)=>this.bolumService.getPagedBolumlerByInputAndFilter(query);
    this.list.hookToQuery(bolumStreamCreator).subscribe((response)=>{
      this.bolum=response;
    })
  }
    // add new method
    createBolum() {
      this.selectedBolum = {} as BolumInfoDto;
      this.buildForm();
      this.isModalOpen = true;
    }
    editBolum(id: string) {
      this.bolumService.getBolumSingleById(id).subscribe((Bolum) => {
        this.selectedBolum = Bolum;
        this.buildForm();
        this.isModalOpen = true;
      });
    }
  

    buildForm(){
      this.form=this.fb.group({
        bolumAdi:[this.selectedBolum.bolumAdi||'',Validators.required],
        isOnaylandi: false,
        id:[this.selectedBolum.id || null]
      })
    }

    save(){
      if(this.form.invalid){
        return;
      }
      
      
      if(this.selectedBolum.id){
        this.bolumService.updateBolumByInput(this.form.value).subscribe(()=>{
          this.isModalOpen=false;
          this.form.reset();
          this.list.get();
        })
      }else{
        this.bolumService.newBolumByInput(this.form.value).subscribe(()=>{
          this.isModalOpen=false;
          this.form.reset();
          this.list.get();
        })
      }
    }
}

// import { ListService, PagedResultDto } from '@abp/ng.core';
// import { Component, OnInit } from '@angular/core';
// import { BookService, BookDto } from '@proxy/books';

// @Component({
//   selector: 'app-book',
//   templateUrl: './book.component.html',
//   styleUrls: ['./book.component.scss'],
//   providers: [ListService],
// })
// export class BookComponent implements OnInit {
//   book = { items: [], totalCount: 0 } as PagedResultDto<BookDto>;

//   constructor(public readonly list: ListService, private bookService: BookService) {}

//   ngOnInit() {
//     const bookStreamCreator = (query) => this.bookService.getList(query);

//     this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
//       this.book = response;
//     });
//   }
// }