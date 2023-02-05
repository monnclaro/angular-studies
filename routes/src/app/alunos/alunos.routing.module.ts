import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
  {
    path: '',
    component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent },
      {
        path: ':id',
        component: AlunoDetalheComponent,
        resolve: { aluno: AlunoDetalheResolver },
      },
      {
        path: ':id/edit',
        component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard],
      },
    ],
  },
  /* { path: 'alunos/novo', component: AlunoFormComponent },
  { path: 'alunos/:id', component: AlunoDetalheComponent },
  { path: 'alunos/:id/edit', component: AlunoFormComponent }, */
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
