import { Component } from '@angular/core';
import { Servizio } from 'src/app/classes/servizio';

@Component({
  selector: 'app-dotazioni-servizi',
  templateUrl: './dotazioni-servizi.component.html',
  styleUrls: ['./dotazioni-servizi.component.css']
})
export class DotazioniServiziComponent {

  allestimenti: Servizio[] = [];
  dotazioni: Servizio[] = [];
  accessori: Servizio[] = [];

  constructor() {
    //Allestimenti
    this.allestimenti.push(new Servizio("./assets/imgs/towels.png", "Set di biancheria da letto e asciugamani"))
    this.allestimenti.push(new Servizio("./assets/imgs/plates.png", "Set di stoviglie e bicchieri"))
    this.allestimenti.push(new Servizio("./assets/imgs/air-conditioner.png", "Aria condizionata"))
    this.allestimenti.push(new Servizio("./assets/imgs/wifi.png", "WiFi"))
    this.allestimenti.push(new Servizio("./assets/imgs/coffee.png", "Macchinetta per il caffè"))
    this.allestimenti.push(new Servizio("./assets/imgs/double-bed.png", "Letti"))

    //Dotazioni
    this.dotazioni.push(new Servizio("./assets/imgs/radar.png", "Ecoscandaglio"))
    this.dotazioni.push(new Servizio("./assets/imgs/antenna.png", "Stazione vento"))
    this.dotazioni.push(new Servizio("./assets/imgs/radio.png", "VHF"))
    this.dotazioni.push(new Servizio("./assets/imgs/desalination.png", "Desalinatore"))
    this.dotazioni.push(new Servizio("./assets/imgs/gps.png", "GPS"))
    this.dotazioni.push(new Servizio("./assets/imgs/elica.png", "Elica di prua"))
    this.dotazioni.push(new Servizio("./assets/imgs/automatic.png", "Pilota automatico"))
    this.dotazioni.push(new Servizio("./assets/imgs/boat.png", "Tender e fuoribordo"))
    this.dotazioni.push(new Servizio("./assets/imgs/78982.png", "Randa e Genoa avvolgibile con avvolgi randa elettrico"))
    this.dotazioni.push(new Servizio("./assets/imgs/Ancor.png", "Salpa ancora elettrico con comandi a timone"))
    this.dotazioni.push(new Servizio("./assets/imgs/SerbatoioAcqua.png", "Doppio serbatoio di acqua con 800L di capienza complessiva"))

    //Servizi e Accessori
    this.accessori.push(new Servizio("./assets/imgs/apron.png", "Hostess"))
    this.accessori.push(new Servizio("./assets/imgs/extra1.png", "Extra su richiesta"))
  }

}
