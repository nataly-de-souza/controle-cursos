import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from 'src/app/model/curso';

@Injectable({
  providedIn: 'root'
})
export class CadastroCursoPromiseService {

  URL = 'http://localhost:3000/curso/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Promise<any> {
    return this.httpClient.get(this.URL)
               .toPromise();
  }

  save(curso: Curso): Promise<any> {
    return this.httpClient
      .post<Curso>(
        this.URL,
        JSON.stringify(curso),
        this.httpOptions
      )
      .toPromise();
  }

  /*patch(curso: Curso): Promise<Curso> {
    return this.httpClient
      .patch<Curso>(
        this.URL,
        JSON.stringify(Curso),
        this.httpOptions
      )
      .toPromise();
  }

  update(curso: Curso): Promise<Curso> {
    return this.httpClient
      .put<Curso>(this.URL, JSON.stringify(curso), this.httpOptions)
      .toPromise();
  }

*/
}
