import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brandImg = "assets/navbar/attractive.png";
  brandImg2 = "assets/navbar/ballon3.png";
  constructor() { }

  ngOnInit() {
  }

}
