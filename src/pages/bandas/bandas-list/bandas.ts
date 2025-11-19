import { CommonModule } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { Banda } from "../../../models/bandas.model";
import { BandasService } from "../bandas.service";


@Component({
  selector: 'app-bandas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'bandas.html',
  styleUrl: 'bandas.scss'
})
export class Bandas implements OnInit {
bandas: Banda[] = []

  constructor(private bandasService : BandasService) {}

  ngOnInit(): void {
    console.log('Bandas component initialized');
    this.carregarBandas();
  }

  carregarBandas(): void {
    this.bandasService.get().subscribe(data => {
      this.bandas = data;
      console.log(data);
    });
  }

}