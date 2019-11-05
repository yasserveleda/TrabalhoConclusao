import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProjetoComponent } from './projeto/projeto/projeto.component';
import { AdicionarComponent } from './projeto/adicionar/adicionar.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { LoginComponent } from './login/login/login.component';
import { DetalheComponent } from './projeto/detalhe/detalhe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projetos', component: ProjetoComponent },
  { path: 'adicionar-projeto', component: AdicionarComponent },
  { path: 'adicionar-usuario', component: UsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produto/:id', component: DetalheComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
