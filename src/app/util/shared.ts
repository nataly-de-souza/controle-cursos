import { Constants } from './constants';
import { Curso } from '../model/curso';

export class Shared {
  constructor() {}


  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.CURSOS_KEY) != null) {
      return;
    }

    let curso = new Curso();
    localStorage.setItem(Constants.CURSOS_KEY, JSON.stringify(curso));
  }
}
