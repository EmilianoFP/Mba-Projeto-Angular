import {Component, Input, OnInit} from '@angular/core';
import {Medico} from '../../model/medico';

@Component({
  selector: 'app-pipe-exemplo',
  templateUrl: './pipe-exemplo.component.html',
  styleUrls: ['./pipe-exemplo.component.scss']
})
export class PipeExemploComponent implements OnInit {
  valor: number;
  multiplicador: number;
  data = new Date();
  @Input()
  medicos: Medico[];

  filtro: string;

  numeros: number[] = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
