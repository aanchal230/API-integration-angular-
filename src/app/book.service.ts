import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/books";

  constructor( private http: HttpClient) { }

  getbooks(): Observable<any>{
    debugger
    return this.http.get(`${this.baseUrl}`);
  }
}
