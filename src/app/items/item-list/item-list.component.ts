import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from "../list-item/list-item.component";
import { ITEMS } from '../item-moc';
import { IItem } from '../item';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-item-list',
    standalone: true,
    imports: [CommonModule, ListItemComponent, FormsModule],
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  items: IItem[] = ITEMS;
  originalItems: IItem[] = [...ITEMS];
  deletedItems: IItem[] = [];
  isSorted: boolean = false;
newItemName: any;
  newItemDate: any;

  clear() {
    this.items = [];
    this.deletedItems = [];
  }

  load() {
    this.items = [...this.originalItems];
    this.deletedItems = [];
  }

  removeItem(index: number) {
    const deletedItem = this.items.splice(index, 1)[0];
    this.deletedItems.push(deletedItem);
  }

  sortDate() {
    if (this.isSorted) {
      this.items = this.originalItems.filter(item => !this.deletedItems.includes(item));
      this.deletedItems = [];
    } else {
      this.items.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA - dateB;
      });
    }
    this.isSorted = !this.isSorted;
  }
  createTask(){
    const newItem: IItem = {
      id: this.items.length ? Math.max(...this.items.map(item => item.id)) + 1 : 1,
      text: this.newItemName,
      date: this.newItemDate,
      isChecked: false,
    };
    this.items.push(newItem);
    this.newItemName = '';
    this.newItemDate = '';
  }
}
