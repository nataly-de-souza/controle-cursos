import { GridComponent } from './../grid/grid.component';
import { CursoStorageService } from './../cadastro-cursos/cadastro-cursos.service';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  horas_sum: number = 0;
  investimento_sum: number = 0;

  constructor(private cursoService: CursoStorageService) {

    this.cursoService.getNotificacoes().subscribe((atualizou: boolean) => {

      if (atualizou)
        this.carregar();
    })
   }

  ngOnInit(): void {

    this.carregar();
    // this.horas_sum = WebStorageUtil.total_horas_investidas();
    // this.investimento_sum = WebStorageUtil.total_valor_investido();
  }

  ngOnChanges(): void {

  }

  carregar() {

    let investimento_calc: number = 0;
    let horas_calc: number = 0;

    this.cursoService.getAll().subscribe(
      (data) => {
        for (let c of data) {
          if (c.duracao != undefined) {
            horas_calc += parseInt(c.duracao.toString());
            console.log(horas_calc)
          }

          if (c.investimento != undefined) {
            investimento_calc += parseInt(c.investimento.toString());
          }
       }

       this.investimento_sum = investimento_calc;
       this.horas_sum = horas_calc;
      },
      (error) => {
        alert(error);
      }
    );
  }
}
