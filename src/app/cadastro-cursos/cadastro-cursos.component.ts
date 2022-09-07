import { CursoStorageService } from './cadastro-cursos.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../model/curso';
import * as M from 'materialize-css'
import { ThisReceiver } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-cadastro-cursos',
  templateUrl: './cadastro-cursos.component.html',
  styleUrls: ['./cadastro-cursos.component.css'],
  providers: [CursoStorageService],
})
export class CadastroCursosComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  @ViewChild('categoriaSelect') categoriaSelect!: ElementRef;


  curso!: Curso;
  cursos?: Curso[];
  categorias?: string[]
  isNew!: boolean;
  mask_date: string = '00/0000'
  name_button: string = 'CADASTRAR'

  inicio_curso : string = "";
  fim_curso : string = "";

  isSubmitted: boolean = false;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;


  constructor(private route: ActivatedRoute, private cursoService: CursoStorageService) { }

  ngAfterViweInit() {
    if (!this.isNew) {
      M.updateTextFields();
    }
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.isNew = !(id > 0);

    Shared.initializeWebStorage();
    this.listaCategorias()

    if (this.isNew) {
      this.curso = new Curso();
    } else {
      /* todo clonar por questão de endereço de memoria*/
      this.curso = this.cursoService.getCurso(id);
      this.name_button = 'ALTERAR'
    }
  }


  onSubmit() {
    this.isSubmitted = true;
    console.log(this.curso)


    if (this.isNew) {
        this.cursoService.save(this.curso);
        this.isSuccess = true;
        this.isShowMessage = true;
        this.message = 'Cadastro realizado com sucesso!';
    } else {
      this.cursoService.update(this.curso);
      this.isSuccess = true;
      this.isShowMessage = true;
      this.message = 'Cadastro alterado com sucesso!';

    }

    this.form.reset();
    this.curso = new Curso();
  }

  listaCategorias() {
    this.categorias = ['Curso Livre', 'Ensino Superior', 'Pós Graduação']

    setTimeout(() => {
      M.FormSelect.init(document.querySelectorAll('#categoriaSelect'), {})
   }, 0)

  }

}



