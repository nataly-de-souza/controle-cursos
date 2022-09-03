import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../model/curso-';

@Component({
  selector: 'app-cadastro-cursos',
  templateUrl: './cadastro-cursos.component.html',
  styleUrls: ['./cadastro-cursos.component.css']
})
export class CadastroCursosComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  curso!: Curso;
  cursos?: Curso[];


  inicio_curso : string = "";
  fim_curso : string = "";

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.curso = new Curso('', '', '', '', '', 0, 0);

  }

  onSelectChange(event: Event) {
    //alert((event.target as HTMLInputElement).value);
    this.inicio_curso = (event.target as HTMLInputElement).value;
  }

  onSubmit() {
    this.form.reset();
    this.curso = new Curso('', '', '', '', '', 0, 0);
  }

}
