import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Book } from '../Models/book';
import { ConfirmationService, SelectItem, MessageService, Dialog, MenuItem } from "primeng/primeng";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  books:Book[] = new Array<Book>();
  selectedBook:Book
  newBook:Book = new Book();
  bookToSave:Book;
  isNew:boolean = false;
  cols:any[];
  contextMenuModel:MenuItem[];
  displayBookDialog:boolean = false;

  constructor(private dataService:DataService,private _messageService:MessageService,private _confirmationService:ConfirmationService) { }

  ngOnInit() {
  
    this.getData();
    
    this.cols = [
      { field: 'Title', header: 'Title' },
      { field: 'Description', header: 'Description' },
      { field: 'PageCount', header: 'Page Count'},
      { field: 'PublishDate', header: 'Publish Date', type: 'Date' }
    ]

    this.contextMenuBuilder();
  }

  getData()
  {
    this.dataService.getBooks().subscribe(res => {

      this.books = res.filter(b => b.PageCount < 1000);
    });
  }

  showAddBook()
  {
    this.bookToSave = this.newBook;
    this.isNew = true;
      this.displayBookDialog = true;
  }

  showEditBook()
  {
    this.bookToSave = this.selectedBook;
    this.bookToSave.PublishDate = new Date(this.bookToSave.PublishDate);
    this.displayBookDialog = true;
  }

  onBookSave(event:Book)
  {
      if(event && this.isNew)
      {
        this.displayBookDialog = false;
        event.ID = this.books.length + 1;
        this.books.push(event);
        this.isNew = false;
        this._messageService.add({ key: "successToast", severity: 'success', summary: '', detail: 'Data saved succesfully!' })
        
      }
      else if(event)
      {
        this.displayBookDialog = false;
        this._messageService.add({ key: "successToast", severity: 'success', summary: '', detail: 'Data saved succesfully!' })
      }
      else
      {
        this.displayBookDialog = false;
      }
  }

  deleteBook()
  {
    this._confirmationService.confirm({
      key:'bookDelete',
      message: 'Do You wish to delete selected data row?',
      accept: () => {
        this.dataService.deleteBook(this.selectedBook.ID).subscribe(() => {
          this._messageService.add({ key: "successToast", severity: 'success', summary: '', detail: 'Data deleted succesfully!' })
          this.books = this.books.filter(b => b.ID != this.selectedBook.ID);
        })
      }
    });
      
  }

  contextMenuBuilder()
  {
    this.contextMenuModel = [
      {
        label: 'Edit data row',
        icon: 'fas fa-edit',
        command: (onclick)=> {this.showEditBook()}
    },
      {
          label: "Delete book",
          icon: 'fas fa-bin',
          command: (onclick)=> {this.deleteBook()}
      }
  ];
  }



}
