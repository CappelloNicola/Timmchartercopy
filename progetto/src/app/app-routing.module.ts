import { CookieComponent } from './components/cookie/cookie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotazioniServiziComponent } from './components/dotazioni-servizi/dotazioni-servizi.component';
import { HomeComponent } from './components/home/home.component';
import { ListinoPrezziComponent } from './components/listino-prezzi/listino-prezzi.component';
import { FAQComponent } from './components/faq/faq.component';
import { PrenotaComponent } from './components/prenota/prenota.component';
import { ContattiComponent } from './components/contatti/contatti.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servizi', component: DotazioniServiziComponent},
  {path: 'prezzi', component: ListinoPrezziComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'prenota', component: PrenotaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
