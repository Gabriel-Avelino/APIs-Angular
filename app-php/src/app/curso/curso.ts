//Classe
export class Curso{

    //Atributos
    NomeCurso!: string | null; 
    ValorCurso!: number | null; 
    idCurso?: number
    
}

export interface CursosResponse {
  cursos: Curso[];
}