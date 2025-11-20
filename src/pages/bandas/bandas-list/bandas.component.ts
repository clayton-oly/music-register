import { CommonModule } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { BandasService } from "../bandas.service";
import { Banda } from '../../../models/bandas.model';
import { ɵEmptyOutletComponent } from "@angular/router";


@Component({
  selector: 'app-bandas',
  standalone: true,
  imports: [CommonModule, ɵEmptyOutletComponent],
  templateUrl: 'bandas.component.html',
  styleUrl: 'bandas.component.scss'
})
export class BandasComponent implements OnInit {
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
  
  salvar(){

  }

}