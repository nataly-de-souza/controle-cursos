import { CadastroCursoPromiseService } from './../cadastro-cursos/services/cadastro-curso-promise.service';
import { Constants } from 'src/app/util/constants';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private cadastroCursoPromiseService: CadastroCursoPromiseService) { }
  cursos!: Curso[];

  ngOnInit(): void {
    this.cadastroCursoPromiseService.getAll().then((c: any) => {
      this.cursos = c;
    })


    //forma antiga
    // this.cursos = WebStorageUtil.getArray(Constants.CURSOS_KEY);
  }


  onDelete(id: string) {
    let confirmation = window.confirm(
      'Tem certeza que deseja apagar esse registro? ');

      if (!confirmation) {
      return;
    }


  }

}

