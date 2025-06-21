import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './components/searchbar/searchbar.component';



@NgModule({
  declarations: [
      SearchbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    SearchbarComponent,
  ]
})
export class SharedModule { }
