import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	

  constructor(private router: Router) {
		 
 	}
  

  abrirTarefa(usuario, senha){
  	let Usuario = usuario;
  	let Senha = senha;


  	if (Senha =="admin" && Senha == "admin") {
  		this.router.navigate(['/tarefas']);
  	}else{
  		console.log("login errado");
  		
  	}
  	
  }

}
