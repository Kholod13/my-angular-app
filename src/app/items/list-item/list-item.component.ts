import { Component, Input } from '@angular/core';
import { IItem } from '../item';

@Component({
  selector: 'app-list-item',
  standalone: true,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item!: IItem;

  // Метод для обробки кліків на всьому елементі <li>
  onClick(event: MouseEvent) {
    this.item.isChecked = !this.item.isChecked;
  }

  // Метод для обробки кліків тільки на чекбоксі
  toggleCheck(event: MouseEvent) {
    event.stopPropagation(); // Запобігає виклику onClick на батьківському <li>
    this.item.isChecked = !this.item.isChecked;
  }
}