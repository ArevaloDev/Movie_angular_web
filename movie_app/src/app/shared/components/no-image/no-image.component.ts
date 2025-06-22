import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-image',
  templateUrl: './no-image.component.html',
  styleUrl: './no-image.component.css'
})
export class NoImageComponent {
  @Input() message:string = 'Sin Imagen';
}
