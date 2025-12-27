import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Curso, CursosResponse } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL
  url = "http://localhost/api/php/"

  //Vetor
  vetor : Curso [] = [];

  //Construtor
  constructor(private http: HttpClient) { }

  //Obter todos os cursos: O observable é um objeto que gera um fluxo de dados ao logo do tempo. Só funciona através de subscribe. Pipe transforma os dados. O CursosResponse é uma interface que define o formato do get. Map separa o atributo cursos e o retorna.
  obterCursos(): Observable<Curso[]> {
    return this.http.get<CursosResponse>(this.url + 'listar').pipe(
        map(res => res.cursos)
      );

  }

  //Cadastrar curso
  cadastrarCurso(c:Curso): Observable<Curso[]>{
    return this.http.post<CursosResponse>(this.url + 'cadastrar', {cursos:c}).pipe(
      map((res) => {
        this.vetor.push(...res.cursos);
        return this.vetor;
      })
    );
  }

  //Remover curso
  removerCurso(c:Curso): Observable<Curso[]>{
    if (c.idCurso == null) {
      throw new Error('Curso sem id não pode ser removido');
    }
    const params = new HttpParams().set("idCurso", c.idCurso.toString());
    return this.http.delete<CursosResponse>(this.url + "excluir", {body: {
      cursos: {
        idCurso: c.idCurso
      }
    }}).pipe(
      map(res => {
        const filtro = this.vetor.filter((curso) => 
          curso.idCurso !== c.idCurso
        )

        this.vetor = filtro;
        return this.vetor = filtro;
      })
    )
  }

  //Atualizar curso
  atualizarCurso(c:Curso): Observable<Curso[]>{
    //Executa alteração por url
    return this.http.put(this.url + "alterar", {cursos: c})
    //Percorre o vetor pra saber o id do curso alterado
    .pipe(
      map((res) => {
        const cursoAlterado = this.vetor.find((item) =>{
          return item.idCurso === c.idCurso;
        })

        //Altera o valor do vetor local
        if(cursoAlterado){
          cursoAlterado.NomeCurso = c.NomeCurso;
          cursoAlterado.ValorCurso = c.ValorCurso;
        }

        //Retorno
        return this.vetor;
      })
    )
  }

}

