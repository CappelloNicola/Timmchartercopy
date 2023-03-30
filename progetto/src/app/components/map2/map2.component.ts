import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';


@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css']
})


export class Map2Component implements AfterViewInit {
  private map: any;

  ngOnInit() { L.Icon.Default.imagePath = "/assets/MapIcons/" }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  routing!: any

  constructor() { }

  ngAfterViewInit(): void {

    
    this.initMap();

    this.routing = L.Routing.control({
      waypoints: [
        L.latLng(40.853081, 14.272148 ),
        L.latLng( 40.824724, 14.118044)
      ],
      routeWhileDragging: true
    });

    this.routing.addTo(this.map);
    // this.map.removeControl(routing)

  }

  arrayPorto: any[] = [{ nome: "Aeroporto di Napoli-Capodichino", lat: 40.882120, lng: 14.272730 },
  { nome: "Stazione ferroviaria di Napoli", lat: 40.853081, lng: 14.272148 }]
  posizioneFissa: any = { nome: "timmcharter", lat: 40.824724, lng: 14.118044 }

  test(x: number) {
    this.map.removeControl(this.routing)
    this.routing = L.Routing.control({
      waypoints: [
        L.latLng(this.arrayPorto[x].lat, this.arrayPorto[x].lng),
        L.latLng(this.posizioneFissa.lat, this.posizioneFissa.lng)
      ],
      routeWhileDragging: true
    });

    this.routing.addTo(this.map);
  }

  getLocation1() {
    this.map.locate({ setView: true, watch: true })

    setTimeout(() => {
      const                                 x = this.map.locate({ setView: true, watch: true })._lastCenter
      this.map.removeControl(this.routing)
      this.routing = L.Routing.control({
        waypoints: [
          L.latLng(x.lat, x.lng),
          L.latLng(this.posizioneFissa.lat, this.posizioneFissa.lng)
        ],
        routeWhileDragging: true
      });

      this.routing.addTo(this.map);
    }, 100);


  }
}
