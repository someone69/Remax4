import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data-service"
import { Makmes } from '../../models/makmes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

}
