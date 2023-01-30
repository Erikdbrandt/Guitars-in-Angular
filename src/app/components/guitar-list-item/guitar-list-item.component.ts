import {Component, Input} from '@angular/core';
import {Guitar} from "../../models/guitar.model";

@Component({
  selector: 'app-guitar-list-item',
  templateUrl: './guitar-list-item.component.html',
  styleUrls: ['./guitar-list-item.component.css']
})
export class GuitarListItemComponent {


  @Input() guitar?: Guitar;


}
