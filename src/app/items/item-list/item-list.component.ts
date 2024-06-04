import { Component } from '@angular/core';
import { ListItemComponent } from "../list-item/list-item.component";
import { ITEMS } from '../item-moc';
import { IItem } from '../item';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-item-list',
    standalone: true,
    imports: [CommonModule, ListItemComponent],
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.css',

})
export class ItemListComponent {
  items: IItem[] = ITEMS;

  clear(){
    this.items = [];
  }
  load(){
    this.items = ITEMS;
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
