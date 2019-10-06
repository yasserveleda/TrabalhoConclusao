import { Component, OnInit } from '@angular/core';
import { ProjetoSerivce } from '../projeto/projeto.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  nomeResponsavel: string;
  nomeProjeto: string;
  endereco: string;
  email: string;
  telefone: string;
  descricao: string;

  constructor(private projetoService: ProjetoSerivce) { }

  ngOnInit() {
    this.nomeResponsavel = ``;
    this.nomeProjeto = ``;
    this.endereco = ``;
    this.email = ``;
    this.telefone = ``;
    this.descricao = ``;
  }

  cadastrarProjeto() {
    const novoProjeto = {
      nomeResponsavel: this.nomeResponsavel,
      nomeProjeto: this.nomeProjeto,
      endereco: this.endereco,
      email: this.email,
      telefone: this.telefone,
      descricao: this.descricao
    };
    console.log('FOIIII');
    console.log(novoProjeto);

    this.projetoService.criarProjeto(novoProjeto).subscribe( response => {
      console.log(response);
    },
    error => {
      console.log(error);
      // console.log(error.status);
    }
  );
  }

}
