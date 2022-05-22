import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Criação da lista com os alunos para exportar para o arquivo app.component.html
  lista = [
    {
      'nome':'Renan Y. Yassuda',
      'ru':'3300338',
      'curso':'Análise e Desenvolvimento de Sistemas',
      'niver':'16/07/1994'
    },
    {
      'nome':'Oswaldo',
      'ru':'2342574',
      'curso':'Química',
      'niver':'31/08/1994'
    },
    {
      'nome':'Pedro',
      'ru':'3293847',
      'curso':'Matemática',
      'niver':'23/09/1984'
    },
    {
      'nome':'Júlia',
      'ru':'3958403',
      'curso':'Psicologia',
      'niver':'12/07/1997'
    },
    {
      'nome':'Camila',
      'ru':'3094876',
      'curso':'Letras',
      'niver':'01/01/1991'
    },
  ]
}
