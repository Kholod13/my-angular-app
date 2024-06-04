import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent } from "./items/list-item/list-item.component";
import { ItemListComponent } from "./items/item-list/item-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListItemComponent, ItemListComponent]
})
export class AppComponent {
  title = 'my-angular-app';
}
