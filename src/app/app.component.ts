import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bandas } from "../pages/bandas/bandas-list/bandas";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Bandas],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-register';
}
