import { Component } from '@angular/core';
import { ListItemComponent } from "../list-item/list-item.component";
import { ITEMS } from '../item-moc';
import { IItem } from '../item';

@Component({
    selector: 'app-item-list',
    standalone: true,
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.css',
    imports: [ListItemComponent]
})
export class ItemListComponent {
  items: IItem[] = ITEMS;

  clear(){
    this.items = [];
  }
  load(){
    this.items = ITEMS;
  }
}
