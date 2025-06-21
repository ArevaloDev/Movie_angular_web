import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    const id:number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);

    if(id){

    }
  }

}
