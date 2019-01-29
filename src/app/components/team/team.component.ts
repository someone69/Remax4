import { Component, OnInit } from '@angular/core';
import { Makler } from "../../models/makler";
import { DataService } from "../../services/data-service"

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Makler[];

  constructor(private dataService: DataService) {
   }

  ngOnInit() {
    this.dataService.loadTeam().subscribe(data => {
      this.team = data;
    });  }

}
