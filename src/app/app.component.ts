import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BandasComponent } from "../pages/bandas/bandas-list/bandas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BandasComponent, BandasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-register';
}
