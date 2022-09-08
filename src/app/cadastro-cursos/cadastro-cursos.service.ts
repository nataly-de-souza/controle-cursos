import { CadastroCursoPromiseService } from './services/cadastro-curso-promise.service';
import { Constants } from 'src/app/util/constants';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoStorageService {
  cursos!: Curso[]

  private cursoSource!: BehaviorSubject<number>;
  delete_grid = new Subject<boolean>();

  URL = 'http://localhost:3000/curso/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {
     this.cursos = WebStorageUtil.getArray(Constants.CURSOS_KEY);
     this.cursoSource = new BehaviorSubject<number>(this.cursos.length);
  }

  getNotificacoes(): Observable<boolean> {
    return this.delete_grid.asObservable();
 }

  // save(curso: Curso): Observable<Curso> {
  //   return this.httpClient.post<Curso>(
  //     this.URL,
  //     curso,
  //     this.httpOptions
  //   );

      //forma antiga
      // this.cursos = WebStorageUtil.getArray(Constants.CURSOS_KEY);
      // this.cursos.push(curso);
      // WebStorageUtil.set(Constants.CURSOS_KEY, this.cursos);
  //  }

    getAll(): Observable<Curso[]> {
      return this.httpClient.get<Curso[]>(`${this.URL}`);
    }

    getById(id: number): Observable<Curso> {
      return this.httpClient.get<Curso>(`${this.URL}/${id}`);
    }

    update(curso: Curso): Observable<Curso> {
      return this.httpClient.put<Curso>(
        (`${this.URL}/${curso.id}`),
        curso,
        this.httpOptions
      );
    }

    delete(id: number): Observable<Curso> {
      this.delete_grid.next(true);
      return this.httpClient.delete<Curso>(
        (`${this.URL}/${id}`),
        this.httpOptions
      );
    }

    save(curso: Curso): Observable<Curso> {
      return this.httpClient.post<Curso>(
        (`${this.URL}`),curso,
        this.httpOptions
      );
    }



  // update(curso: Curso) {
  //   this.cursos = WebStorageUtil.get(Constants.CURSOS_KEY);
  //   this.delete(curso.id);
  //   this.save(curso);
  // }

  // delete(id: string): boolean {
  //   this.cursos = WebStorageUtil.get(Constants.CURSOS_KEY);
  //   this.cursos = this.cursos.filter((u) => {
  //     return u.id?.valueOf() != id?.valueOf();
  //   });

  //   WebStorageUtil.set(Constants.CURSOS_KEY, this.cursos);
  //   return true;
  // }


  // getCursos(id: string): Curso[] {
  //   this.cursos = WebStorageUtil.get(id);
  //   return this.cursos;
  // }

  // getCurso(id: string): any {
  //     this.cursos = WebStorageUtil.get(Constants.CURSOS_KEY);

  //     for (let c of this.cursos) {
  //         if (c.id == id) {
  //             return c;
  //         }
  //     }
  // }

}
