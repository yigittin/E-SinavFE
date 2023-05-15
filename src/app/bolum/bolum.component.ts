import { Component,OnInit } from '@angular/core';
import { ListService,PagedResultDto } from '@abp/ng.core';
import { BolumService,BolumDto } from '@proxy/bolumler';
@Component({
  selector:'app-bolum',
  templateUrl:'./bolum.component.html',
  styleUrls:['./bolum.component.scss'],
  providers:[ListService]
})
export class BolumComponent {
  bolum={items:[],totalCount:0} as PagedResultDto<BolumDto>;
  
  constructor(public readonly list: ListService,private bolumService:BolumService){}
  ngOnInit(){
    const bolumStreamCreator=(query)=>this.bolumService.getList(query);

    this.list.hookToQuery(bolumStreamCreator).subscribe((response)=>{
      this.bolum=response;
    })
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