import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss'],
})
export class AlunoFormComponent implements OnInit {
  aluno: any = {};
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.aluno = this.alunosService.getAlunoById(id);

      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
