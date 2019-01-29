import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousel0 = "assets/images/carousel0.jpg";
  carousel1 = "assets/images/carousel1.jpg";
  carousel2 = "assets/images/carousel2.jpg";
  carousel3 = "assets/images/carousel3.jpg";
  carousel4 = "assets/images/carousel4.jpg";

  constructor() { 

  }
  
  ngOnInit() {
  }

}
