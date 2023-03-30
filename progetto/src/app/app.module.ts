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
import { FooterComponent } from './footer/footer.component';
import { ListinoPrezziComponent } from './components/listino-prezzi/listino-prezzi.component';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,

    DotazioniServiziComponent,
    FooterComponent,
    SliderComponent,
    ListinoPrezziComponent

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
    MatDividerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
