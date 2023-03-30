import { Component, AfterViewInit  } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css']
})
export class Map2Component implements AfterViewInit {
  private map:any;

  

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  

  constructor() { }

  ngAfterViewInit(): void {
    
    this.initMap();

    let routing = L.Routing.control({
      waypoints: [
          L.latLng(57.74, 11.94),
          L.latLng(57.6792, 11.949)
      ],
      routeWhileDragging: true
  });

  routing.addTo(this.map);
  // this.map.removeControl(routing)

  }




  
}
