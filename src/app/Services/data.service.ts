import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Book } from '../Models/book';
import { environment } from '../../environments/environment';
import { JsonPipe } from '../../../node_modules/@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly rootUrl = environment.rootUrl;

  constructor(private http:HttpClient) { }

  getBooks() : Observable<Book[]>
  {
    return this.http.get<Array<Book>>(this.rootUrl + '/api/Books');
  }

  addBook(model:Book)
  {
    return this.http.post<Book>(this.rootUrl + '/api/Books',model);
  }

  editBook(model:Book)
  {
    return this.http.put<Book>(this.rootUrl + '/api/Books/'+ model.ID,model);
  }

  deleteBook(ID:number)
  {
    return this.http.delete(this.rootUrl + '/api/Books/'+ ID);
  }
}
