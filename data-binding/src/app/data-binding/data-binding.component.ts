import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://loiane.com";

  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/200/200/nature/'
  // topicoAula: [
  //   {id:9, topico:"Property e Interpolação"},
  //   {id:10, topicp:"Class e Style Binding"}
  // ]

  getValor()
  {
    return 1;
  }

  getCurtirCurso()
  {
    return true;
  }


  constructor() { }

  ngOnInit(): void {
    // console.log(this.topicoAula)
  }

}
