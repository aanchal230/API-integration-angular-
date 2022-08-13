import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";

export const routes:Routes=[
 {
     path: 'books',
     component: BooksComponent
 },
]
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[]
})
export class AppRoutingModule{

}