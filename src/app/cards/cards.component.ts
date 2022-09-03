import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() horas: number = 0;
  @Input() investimento: number = 0;

  horas_sum: number = 0;
  investimento_sum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.horas_sum = this.horas_sum + this.horas;
    this.investimento_sum = this.investimento + this.investimento;
    console.log("adkjahkdjhajskhdjkashdjkahdkjhasjkd")
  }

}
