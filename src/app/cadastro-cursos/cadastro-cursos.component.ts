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
    this.curso = new Curso();

    if (!this.isNew) {

      this.cursoService.getById(id).subscribe(
        (data) => {
          this.curso = data;
        },
        (error) => {
          alert(error);
        }
      );
      // forma antiga
      //this.curso = this.cursoService.getCurso(id);
       this.name_button = 'ALTERAR'
    }
  }


  onSubmit() {
    this.isSubmitted = true;
    console.log(this.curso)


    if (this.isNew) {
        //this.cursoService.save(this.curso);

        this.cursoService.save(this.curso).subscribe(
          (data) => {
            console.log('asdsdssdsds')
            this.message = 'Cadastro realizado com sucesso!';
            this.isSuccess = true;
            this.isShowMessage = true;
            this.form.reset();
            this.curso = new Curso();
          },
          (error) => {
            this.isSuccess = false;
            this.message = 'Ocorreu um erro ao inserir. Tente novamente!';
            this.isShowMessage = true;
          }
        );
    } else {

      this.cursoService.update(this.curso).subscribe(
        (data) => {
          console.log('asdsdssdsds')
          this.message = 'Cadastro alterado com sucesso!';
          this.isSuccess = true;
          this.isShowMessage = true;
          this.form.reset();
          this.curso = new Curso();
        },
        (error) => {
          this.isSuccess = false;
          this.message = 'Ocorreu um erro ao atualizar. Tente novamente!';
          this.isShowMessage = true;
        }
      );
      // this.cursoService.update(this.curso);
    }


  }

  listaCategorias() {
    this.categorias = ['Curso Livre', 'Ensino Superior', 'Pós Graduação']

    setTimeout(() => {
      M.FormSelect.init(document.querySelectorAll('#categoriaSelect'), {})
   }, 0)

  }

}



