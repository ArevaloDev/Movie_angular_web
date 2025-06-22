import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

   @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();



}
