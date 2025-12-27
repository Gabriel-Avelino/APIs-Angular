import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL Base
  url = "http://localhost/api/php/"

  //Vetor de cursos
  vetor: Curso[] = [];

  curso = new Curso();

  //Construtor
  constructor(private curso_servico: CursoService) { }

  //Inicializador
  ngOnInit(): void {
    this.selecao();
  }

  //Cadastro
  cadastro(curso: Curso) {
    this.curso_servico.cadastrarCurso(curso).subscribe(
      (res: Curso[]) => {

        //Adicionando dados ao vetor
        this.vetor = res;

        //Limpar os atributos
        this.curso.NomeCurso = null;
        this.curso.ValorCurso = null;

        //Atualizar a listagem;
        this.selecao();

      }
    );
  }

  //Seleção
  selecao(): void {
    this.curso_servico.obterCursos().subscribe(cursos => {
      this.vetor = cursos;
    });
  }

  //Alterar
  alterar(curso: Curso){
    this.curso_servico.atualizarCurso(curso).subscribe(
      (res) =>{
        //Atualizar vetor
        this.vetor = res;

        //Limpar os valores do objeto
        this.curso.NomeCurso = null;
        this.curso.ValorCurso = null;

        //Atualizar listagem
        this.selecao();
      }
    )
  }

  //Remover
  remover(curso: Curso) {
    this.curso_servico.removerCurso(curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;
        this.curso.NomeCurso = null;
        this.curso.ValorCurso = null;
        this.selecao();
      }
    )
  }

  //Selecionar curso específico
  selecionarCurso(c: Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.NomeCurso = c.NomeCurso;
    this.curso.ValorCurso = c.ValorCurso
  }
}
