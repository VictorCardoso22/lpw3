import { Component } from '@angular/core';
import {Tarefa} from './model/tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	tarefas: Tarefa[];
  
  constructor() {
    this.tarefas = [  ];   
  }

   gravar(titulo, descicao, peso){
      let tarefa = new Tarefa(titulo, descicao, peso);
      this.tarefas.push(tarefa);
    }

    deletar(id){
     
       this.tarefas.splice(id, 1);
    }
}
