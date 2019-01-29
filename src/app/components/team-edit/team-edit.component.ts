import { Component, OnInit, SystemJsNgModuleLoader, EventEmitter, Input } from '@angular/core';
import { Makler } from "../../models/makler";
import { Makmes } from "../../models/makmes";
import { DataService } from "../../services/data-service";

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
  @Input() team: Makler[];
  @Input() isEditable: boolean;


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

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

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
      this.userIndex = this.team.length - 1;
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

  saveTeam() {
    //this.dataService.saveTeam(this.team);
  }


}
