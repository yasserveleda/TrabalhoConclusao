import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// tslint:disable-next-line:class-name
interface myData {
    status: string;
    response: Object;
}

@Injectable()
export class ProjetoSerivce {

    private httpOptions;
    private url_api;

    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer keyNPMVssZG3m2WhJ',
                'Content-Type': 'application/json'
            })
        };

        this.url_api = `https://api.airtable.com/v0/appBARyBU1Qnpal3D`;
    }

    getProjetos() {
        const url_projetos = `${ this.url_api }/PROJETO`;
        return this.http.get<myData>(url_projetos, this.httpOptions);
    }

    getResponsaveis() {
        const url_responsaveis = `${ this.url_api }/RESPONSAVEL`;
        return this.http.get<myData>(url_responsaveis, this.httpOptions);
    }

    getResponsavel(cpf_cnpj) {
        const url_responsaveis = `${ this.url_api }/RESPONSAVEL?filterByFormula=({CNPJ_CPF}='${ cpf_cnpj }')`;
        return this.http.get<myData>(url_responsaveis, this.httpOptions);
    }

    criarProjeto(projeto) {
        const novoProjeto = {
            'fields': {
                'TITULO': projeto.nomeProjeto,
                'DESCRICAO': projeto.descricao
            }
        };

        return this.http.post<myData>(`${ this.url_api }/PROJETO`, novoProjeto, this.httpOptions);
    }
}
