import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private scroller:ViewportScroller){}

  scrollToPorto(){
    const porto:any = document.getElementById('porto')?.offsetTop;
    this.scroller.scrollToPosition([0, porto])
  }

  }

