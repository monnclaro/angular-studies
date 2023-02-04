import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number;
  inscrição: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private service: CursosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.inscrição = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.curso = this.service.getCurso(this.id);

      if (this.curso == null) {
        this.router.navigate(['/naoEncontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.inscrição.unsubscribe();
  }
}
