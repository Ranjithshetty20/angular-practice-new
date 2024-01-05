import { Component } from '@angular/core';

@Component({
  selector: 'hliv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
// interpolation
  hotelNmae='hoteltaj';
  numberofrooms=10;

  hiddenrooms=false;

  
  toggal():void {

    this.hiddenrooms=!this.hiddenrooms;
    
  }

  
}
