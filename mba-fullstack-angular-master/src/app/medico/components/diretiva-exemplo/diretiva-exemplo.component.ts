import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-exemplo',
  templateUrl: './diretiva-exemplo.component.html',
  styleUrls: ['./diretiva-exemplo.component.scss']
})
export class DiretivaExemploComponent implements OnInit {
  cor: string;
  tempo: number;

  constructor() { }

  ngOnInit() {
  }

  alerta(valor) {
    alert(valor);
  }
}
