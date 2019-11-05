import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      response => {
        console.log(response);
        if (response.id) {
          this.id = response.id;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
