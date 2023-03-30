import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent {
  showCookiePopup: boolean = true;
  showCookiePopupF: boolean = true;
  showReservation: boolean = false;

  constructor() {}

  hideCookiePopup() {
    this.showCookiePopup = false;
  }

  hideCookiePopupF() {
    this.showCookiePopupF = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.showReservation = true;
    }, 50);
  }
}
