import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './services';
import { ListarTarefasComponent } from './listar/listar-tarefas.component';
import { CadastrarTarefasComponent } from './cadastrar/cadastrar-tarefas.component';
import { EditarTarefasComponent } from './editar/editar-tarefas.component';
import { TarefaConcluidaDirective } from './shared';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefasComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
