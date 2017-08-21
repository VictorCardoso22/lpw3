import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { TarefasComponent } from './tarefas/tarefas.component';

import { RouterModule, Routes } from '@angular/router';

export const rotas: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tarefas', component: TarefasComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TarefasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(rotas)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
