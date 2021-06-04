import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // em javascript não é necessario tipar a variavel, mas se desejar pode tipar ela.
  // em TS, o padrão correto se não quiser tipar uma variavel é declarar ela como "any".
  // exemploVar: any;
  nomePortal: string;

  cursos: string[];

  constructor(cursoService:CursosService) {
    // this.exemploVar = 5;
    // this.exemploVar = "teste";
    this.nomePortal = "http://loiane.training";

    // for (let i=0; i<this.cursos.length; i++)
    // {
    //   let curso = this.cursos[i];
    // }

      //var servico = new CursosService();


   }

  ngOnInit(): void {
  }

}
