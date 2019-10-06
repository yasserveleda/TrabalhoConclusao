import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoComponent } from './projeto/projeto.component';
import { ProjetoSerivce } from './projeto/projeto.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AdicionarComponent } from './adicionar/adicionar.component';

@NgModule({
  declarations: [ProjetoComponent, AdicionarComponent],
  providers: [ProjetoSerivce],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class ProjetoModule { }
