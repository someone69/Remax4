import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio1 = "assets/images/portfolio1.jpg";
  portfolio2 = "assets/images/portfolio2.jpg";
  portfolio3 = "assets/images/portfolio3.jpg";
  portfolio4 = "assets/images/portfolio4.jpg";

  constructor() { }

  ngOnInit() {
  }

}
