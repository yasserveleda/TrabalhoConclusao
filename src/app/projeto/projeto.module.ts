import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoComponent } from './projeto/projeto.component';
import { ProjetoSerivce } from './projeto/projeto.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  declarations: [ProjetoComponent, AdicionarComponent, DetalheComponent],
  providers: [ProjetoSerivce],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class ProjetoModule { }
