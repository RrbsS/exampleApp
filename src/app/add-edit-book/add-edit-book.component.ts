import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Book } from '../Models/book';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {

@Input() book:Book
@Output() onSave:EventEmitter<Book> = new EventEmitter<Book>();
dialogHeader:string;
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    if(this.book.ID != 0)
    {
      this.dialogHeader = "Edit book."
    }
    else
    {
      this.dialogHeader = "Add book."
    }
  }



  saveData(book:Book)
  {
      if(this.book.ID != 0)
      {
            this._dataService.editBook(book).subscribe(() => {
              this.onSave.emit(book);
            })
      }
      else
      {
        this._dataService.addBook(book).subscribe(() => {
          this.onSave.emit(book);
        })
      }
  }

  cancel()
  {
    this.onSave.emit(null);
  }

  


}
