import { Component, OnInit, SystemJsNgModuleLoader, EventEmitter, Output } from '@angular/core';
import { Makler } from "../../models/makler";
import { Makmes } from "../../models/makmes";
import { DataService } from "../../services/data-service";

@Component({
  selector: 'app-makmes-edit',
  templateUrl: './makmes-edit.component.html',
  styleUrls: ['./makmes-edit.component.css']
})
export class MakmesEditComponent implements OnInit {

  makmes: Makmes = {
    url: "",
    html: "",
    name: "",
    house: {
      pic: "",
      price: "",
      title: "",
      address: "",
      propid: "",
      rooms: "",
      size: ""
    }
  };
  showprop: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    this.loadMakmes();
  }

  loadMakmes() {
    this.dataService.loadMakmes().subscribe(data => {
      this.makmes = JSON.parse(data[0]);
      this.showprop = true;
    });
  }

  processMakmes(makmes: Makmes) {
    this.showprop = false;
    this.dataService.getPage(makmes.url).subscribe(data => {
      this.makmes = this.dataService.processMakmes(data, makmes.url);
      console.log(this.dataService.makmes);
    })
    this.showprop = true;
  }

  saveMakmes() {
    this.dataService.saveMakmes(this.makmes);
  }

}
