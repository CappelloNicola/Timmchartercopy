import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progetto';

  showCookiePopup: boolean = true;
  showReservation: boolean = false;

  constructor() {}

  hideCookiePopup() {
    this.showCookiePopup = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.showReservation = true;
    }, 50);
  }

}
