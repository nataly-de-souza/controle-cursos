import { Curso } from './../model/curso';
import { Constants } from './constants';

export class WebStorageUtil {
  static get(key: string): any {
    return JSON.parse(localStorage.getItem(key)!);
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getArray(key: string): any[] {
    if (localStorage.getItem(key) == undefined) {
      localStorage.setItem(key, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(key)!);
  }

  static setArray(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static saveItemArray(keyCollection: string, value: any) {
    let collection = this.getArray(keyCollection);
    collection.push(value);
    this.setArray(keyCollection, collection);
  }

  static sequenceId(key: string) {
    return this.getArray(key).length;
  }

  static total_horas_investidas() : any {
    let cursos = WebStorageUtil.getArray(Constants.CURSOS_KEY);
    let total_horas: number = 0;
    for (let c of cursos) {
       total_horas = total_horas + parseInt(c.duracao);
    }

    return total_horas;
  }

  static total_valor_investido() : any {
    let cursos = WebStorageUtil.getArray(Constants.CURSOS_KEY);
    let valor_investido = 0;

    for (let c of cursos) {
      valor_investido = valor_investido + c.investimento;
    }

    return valor_investido;
  }
}
