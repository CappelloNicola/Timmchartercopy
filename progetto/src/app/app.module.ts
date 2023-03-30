import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './components/slider/slider.component';
import { DotazioniServiziComponent } from './components/dotazioni-servizi/dotazioni-servizi.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListinoPrezziComponent } from './components/listino-prezzi/listino-prezzi.component';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { FAQComponent } from './components/faq/faq.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrenotaComponent } from './components/prenota/prenota.component';
import { Map1Component } from './components/map1/map1.component';
import { Map2Component } from './components/map2/map2.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { CookieComponent } from './components/cookie/cookie.component';
import { PortoComponent } from './components/porto/porto.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DotazioniServiziComponent,
    FooterComponent,
    SliderComponent,
    ListinoPrezziComponent,
    FAQComponent,
    NavbarComponent,
    ContattiComponent,
    PrenotaComponent,
    Map1Component,
    Map2Component,
    CookieComponent,
    PortoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatGridListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
