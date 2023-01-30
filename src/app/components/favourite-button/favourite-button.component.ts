import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent {


  @Input() guitarId: string = "";




  onFavouriteClick(): void {
    alert("favourite button clicked on:" + this.guitarId);

  }
}
