import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  horas_sum: number = 0;
  investimento_sum: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.horas_sum = WebStorageUtil.total_horas_investidas();
    this.investimento_sum = WebStorageUtil.total_valor_investido();
  }

  ngOnChanges(): void {

  }

}
