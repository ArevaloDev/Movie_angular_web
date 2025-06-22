import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NoImageComponent } from './components/no-image/no-image.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
      SearchbarComponent,
      ErrorMessageComponent,
      PaginationComponent,
      NoImageComponent,
      LoadingComponent,
      PageNotFoundComponent
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
    PaginationComponent,
    NoImageComponent,
    LoadingComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
