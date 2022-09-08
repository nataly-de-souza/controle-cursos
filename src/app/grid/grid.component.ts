import { Subject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursoStorageService } from '../cadastro-cursos/cadastro-cursos.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private cursoStorageService: CursoStorageService) { }
  cursos!: Curso[];


  ngOnInit(): void {
    this.carregar()

    //forma antiga
    // this.cursos = WebStorageUtil.getArray(Constants.CURSOS_KEY);
  }




  onDelete(id: string) {
    let confirmation = window.confirm(
      'Tem certeza que deseja apagar esse registro? ');

      if (!confirmation) {
      return;
    }

    this.cursoStorageService.delete(parseInt(id)).subscribe(
      (data) => {
        this.carregar()
      },
      (error) => {
        alert(error);
      }
    );
    

  }

  carregar() {
    this.cursoStorageService.getAll().subscribe(
      (data) => {
        this.cursos = data;
      },
      (error) => {
        alert(error);
      }
    );
  }

}

