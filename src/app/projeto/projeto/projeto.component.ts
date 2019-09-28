import { Component, OnInit } from '@angular/core';
import { ProjetoSerivce } from './projeto.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent implements OnInit {

  private projetos: any[];
  private responsaveis: any[];

  constructor(private projetoService: ProjetoSerivce) { }

  ngOnInit() {
    // this.getProjetos();
    // this.getResponsaveis();
    // this.criarProjeto();
  }

  // Busca todos os projetos cadastrados
  getProjetos() {
    this.projetoService.getProjetos().subscribe( response => {
      this.projetos = response[`records`];
      console.log(this.projetos);
    },
    error => {
      console.log(error);
    });
  }

  // Busca todos os projetos cadastrados
  getResponsaveis() {
    this.projetoService.getResponsaveis().subscribe( response => {
      this.responsaveis = response[`records`];
      console.log(this.responsaveis);
    },
    error => {
      console.log(error);
    });
  }

  criarProjeto() {
    this.projetoService.criarProjeto().subscribe( response => {
        console.log(response);
      },
      error => {
        console.log(error);
        // console.log(error.status);
      }
    );
  }
}
