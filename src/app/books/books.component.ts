
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  // b1: any;
  Books: any;
  constructor( private BookService: BookService ) { }
  
  ngOnInit(): void {
    debugger
   this.BookService.getbooks().subscribe((data) =>{
     console.log(data)
     this.Books = data;
   })
  }

}
