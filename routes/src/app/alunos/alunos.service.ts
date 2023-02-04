import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' },
  ];
  constructor() {}

  getAlunos() {
    return this.alunos;
  }

  getAlunoById(id: number) {
    let cursos = this.getAlunos();

    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }

    return null;
  }
}
