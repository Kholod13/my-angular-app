import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from '../item';

@Component({
  selector: 'app-list-item',
  standalone: true,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item!: IItem;
  @Output() delete = new EventEmitter<void>();

  // Метод для обробки кліків на чекбоксі
  toggleCheck(event: MouseEvent) {
    event.stopPropagation(); // Запобігає виклику інших обробників кліків на батьківських елементах
    this.item.isChecked = !this.item.isChecked;
  }

  // Метод для видалення елемента
  onDelete(event: MouseEvent) {
    event.stopPropagation(); // Запобігає виклику інших обробників кліків на батьківських елементах
    this.delete.emit();
  }
}
