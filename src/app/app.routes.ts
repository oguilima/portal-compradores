import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ValidacaoInicialComponent } from './pages/validacao-inicial/validacao-inicial.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: 'validacaoInicial', pathMatch: 'full', component: ValidacaoInicialComponent},
];
