import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Makler } from "../../models/makler";
import { Makmes } from "../../models/makmes";
import { DataService } from "../../services/data-service";
import { MaklerMesiacaComponent } from '../makler-mesiaca/makler-mesiaca.component';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  team: Makler[];
  userIndex;
  editable: Makler = {
    "firstName": "",
    "lastName": "",
    "titul": "",
    "position": "",
    "img": "",
    "tel": "",
    "email": "",
    "web": "",
    "bio": {
      "sk": "",
      "hu": ""
    }
  };

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
    this.processMakmes(this.makmes);

    this.dataService.loadTeam().subscribe(data => {
      this.dataService.team = data;
      this.team = this.dataService.team;
      console.log(this.team);
    });
  }

  editMakler(index) {
    if (index == -1) {
      this.editable = <Makler>{
        "firstName": "",
        "lastName": "",
        "titul": "",
        "position": "",
        "img": "",
        "tel": "",
        "email": "",
        "web": "",
        "bio": {
          "sk": "",
          "hu": ""
        }
      };
    } else {
      this.editable = JSON.parse(JSON.stringify(this.team[index]));
    }
    this.userIndex = index;
  }

  saveMakler() {
    if (this.userIndex == -1) {
      this.team.push(JSON.parse(JSON.stringify(this.editable)));
      this.userIndex = this.team.length -1;
    } else {
      this.team[this.userIndex] = JSON.parse(JSON.stringify(this.editable));
    }
    this.saveTeam();
  }

  deleteMakler(index) {
    if (confirm('Delete ' + this.team[index].firstName)) {
      this.team.splice(index, 1);
      this.saveTeam();
    }
  }

  saveTeam(){
    //this.dataService.saveTeam(this.team);
  }

  loadMakmes() {
    this.dataService.loadMakmes().subscribe(data => {
      this.dataService.makmes = JSON.parse(data[0]);
      this.makmes = this.dataService.makmes;
      console.log(this.makmes);
    });
  }

  processMakmes(makmes: Makmes) {
    this.showprop = false;
    this.dataService.processMakmes(makmes);
    this.showprop = true;
  }


  saveMakmes() {
    this.dataService.saveMakmes(this.makmes);
  }

}
