import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent } from "./list-item/list-item.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListItemComponent]
})
export class AppComponent {
  title = 'my-angular-app';
}
