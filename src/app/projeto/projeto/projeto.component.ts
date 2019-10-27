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

  constructor(private projetoService: ProjetoSerivce) { 
    this.projetos = [
      {
        titulo: `Gatópoles Adoção de Gatinhos`,
        // tslint:disable-next-line:max-line-length
        descricao: `Somos uma ONG que resgata, cuida e doa gatinhos que estão nas ruas e abandonados. Contamos apenas com doações para manter o abrigo onde estão mais de 100 gatinhos aguardando um lar, bem como todas as despesas médicas.`,
        url_img: `gatopoles.png`
      },
      {
        titulo: `Cavalos para Órfãos - novo telhado`,
        // tslint:disable-next-line:max-line-length
        descricao: `Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.`,
        url_img: `cavalo.jpeg`
      },
      {
        titulo: `Aumigo, seu apoio é nossa esperança!`,
        // tslint:disable-next-line:max-line-length
        descricao: `Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.`,
        url_img: `aumigo.jpg`
      },
      {
        titulo: `Projeto Aruanã Universidade Federal Fluminense `,
        // tslint:disable-next-line:max-line-length
        descricao: `Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.`,
        url_img: `aruana.png`
      },
      {
        titulo: `Pet Bazar SOS Animais De Rua`,
        // tslint:disable-next-line:max-line-length
        descricao: `Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.`,
        url_img: `sos-pet.png`
      },
      {
        titulo: `Direito de Sorrir`,
        // tslint:disable-next-line:max-line-length
        descricao: `Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.`,
        url_img: `sorrir-para-vida.jpg`
      },
    ];

  }

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
    const obj = {};
    this.projetoService.criarProjeto(obj).subscribe( response => {
        console.log(response);
      },
      error => {
        console.log(error);
        // console.log(error.status);
      }
    );
  }
}
