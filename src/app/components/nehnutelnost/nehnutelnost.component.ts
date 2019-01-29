import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data-service"
import { Property } from '../../models/property';
import { Makmes } from '../../models/makmes';


@Component({
  selector: 'app-nehnutelnost',
  templateUrl: './nehnutelnost.component.html',
  styleUrls: ['./nehnutelnost.component.css']
})
export class NehnutelnostComponent implements OnInit {
  makmes: Makmes;
  nehnutelnost: Property;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.makmes = this.dataService.getMakmes();
    console.log(this.makmes);
  }

}
