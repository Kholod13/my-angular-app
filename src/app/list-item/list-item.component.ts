import { Component } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  text: string = "Hit the gym";
  date: string = "01.04.2023";
  isChecked: boolean = false;

  onClick(event: MouseEvent){
    this.isChecked = !this.isChecked;
  }
}
