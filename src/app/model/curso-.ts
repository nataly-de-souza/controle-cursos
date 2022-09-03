export class Curso {
  id?: string;
  descricao?: string;
  instituicao?: string;
  categoria: string;
  data_inicial: string;
  data_final: string;
  investimento: number;
  duracao: number;

  constructor(descricao: string,
              instituicao: string,
              categoria: string,
              data_inicial: string,
              data_final: string,
              duracao: number,
              investimento: number) {

      this.id = String(Math.round(Math.random() * 1000));
      this.descricao = descricao;
      this.instituicao = instituicao;
      this.categoria = categoria;
      this.data_inicial = data_inicial;
      this.data_final = data_final;
      this.investimento = investimento;
      this.duracao = duracao;

              }
}
