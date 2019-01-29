import { Component, OnInit, SystemJsNgModuleLoader, EventEmitter, Output } from '@angular/core';
import { Makler } from "../../models/makler";
import { Makmes } from "../../models/makmes";
import { DataService } from "../../services/data-service";

//declare var jquery: any;
//declare var $: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  team: Makler[];
  isEditable: boolean = true;

  ngOnInit() {
    this.dataService.loadTeam().subscribe(data => {
      this.team = data;
    });
  }
}
