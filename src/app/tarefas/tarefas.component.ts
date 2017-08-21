import { Component, OnInit } from '@angular/core';
import {Tarefa} from '../model/tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

 

  ngOnInit() {
  }

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
