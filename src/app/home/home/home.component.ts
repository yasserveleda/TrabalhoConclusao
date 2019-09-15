import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projetos: any[];

  constructor() {
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
    console.log(this.projetos);
  }

}
