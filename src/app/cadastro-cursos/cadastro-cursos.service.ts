import { CadastroCursoPromiseService } from './services/cadastro-curso-promise.service';
import { Constants } from 'src/app/util/constants';
import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable()
export class CursoStorageService {
  cursos!: Curso[]

  private cursoSource!: BehaviorSubject<number>;

  constructor(private cadastroCursoPromiseService: CadastroCursoPromiseService) {
     this.cursos = WebStorageUtil.getArray(Constants.CURSOS_KEY);
     this.cursoSource = new BehaviorSubject<number>(this.cursos.length);
  }

  save(curso: Curso): Promise<any> {
    const p = new Promise<any>((resolve, reject) => {

      this.cadastroCursoPromiseService.save(curso);

      //manter a forma antiga por enquanto
      this.cursos = WebStorageUtil.getArray(Constants.CURSOS_KEY);
      this.cursos.push(curso);
      WebStorageUtil.set(Constants.CURSOS_KEY, this.cursos);

  })

  return p;

  }

  update(curso: Curso) {
    this.cursos = WebStorageUtil.get(Constants.CURSOS_KEY);
    this.delete(curso.id);
    this.save(curso);
  }

  delete(id: string): boolean {
    this.cursos = WebStorageUtil.get(Constants.CURSOS_KEY);
    this.cursos = this.cursos.filter((u) => {
      return u.id?.valueOf() != id?.valueOf();
    });

    WebStorageUtil.set(Constants.CURSOS_KEY, this.cursos);
    return true;
  }


  getCursos(id: string): Curso[] {
    this.cursos = WebStorageUtil.get(id);
    return this.cursos;
  }

  getCurso(id: string): any {
      this.cursos = WebStorageUtil.get(Constants.CURSOS_KEY);

      for (let c of this.cursos) {
          if (c.id == id) {
              return c;
          }
      }
  }

}
