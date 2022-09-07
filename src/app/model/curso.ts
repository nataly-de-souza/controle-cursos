export class Curso {
  id: string;
  descricao?: string;
  instituicao?: string;
  categoria?: string;
  data_inicial?: string;
  data_final?: string;
  investimento?: number;
  duracao?: number;

  constructor() {
      this.id = String(Math.round(Math.random() * 1000));;
  }


    // public static clone(curso: Curso) {
    //   let u: Curso = new Curso(curso.id, curso.descricao, curso.instituicao, curso.categoria, curso.data_inicial, curso.data_final, curso.duracao, curso.investimento);
    //   u.descricao = curso.descricao;
    //   u.instituicao = curso.instituicao;
    //   u.categoria = curso.categoria;
    //   u.data_inicial = curso.data_inicial;
    //   u.data_final = curso.data_final;
    //   u.duracao = curso.duracao;
    //   u.investimento = curso.investimento;
    //   u.id = curso.id
    //   return u;
    // }
}
