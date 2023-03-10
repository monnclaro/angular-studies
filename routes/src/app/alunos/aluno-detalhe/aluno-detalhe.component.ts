import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: AlunosService,
    private router: Router
  ) {}

  ngOnInit() {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    );*/

    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe((info: { aluno: Aluno }) => {
      console.log('Recebendo o obj Aluno do resolver');
      this.aluno = info.aluno;
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'edit']);
  }
}
