import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
      SearchbarComponent,
      ErrorMessageComponent,
      PaginationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    SearchbarComponent,
    ErrorMessageComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
