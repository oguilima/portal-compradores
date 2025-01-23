import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ValidacaoInicialComponent } from './pages/validacao-inicial/validacao-inicial.component';
import { CotacoesComponent } from './pages/cotacoes/cotacoes.component';
import { AvalicaoPropostasComponent } from './pages/avalicao-propostas/avalicao-propostas.component';
import { ControleCotacoesComponent } from './pages/controle-cotacoes/controle-cotacoes.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'validacaoInicial', pathMatch: 'full', component: ValidacaoInicialComponent },
    { path: 'cotacoes', pathMatch: 'full', component: CotacoesComponent },
    { path: 'avaliacaoPropostas', pathMatch: 'full', component: AvalicaoPropostasComponent },
    { path: "controleCotacao", pathMatch: "full", component: ControleCotacoesComponent }
];
