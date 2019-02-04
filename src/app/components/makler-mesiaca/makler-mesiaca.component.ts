import { Component, OnInit, Input } from '@angular/core';
import { Makler } from "../../models/makler";
import { DataService } from "../../services/data-service"
import { Makmes } from '../../models/makmes';

@Component({
  selector: 'app-makler-mesiaca',
  templateUrl: './makler-mesiaca.component.html',
  styleUrls: ['./makler-mesiaca.component.css']
})
export class MaklerMesiacaComponent implements OnInit {

  makmes: Makmes;

  user: Makler;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.loadMakmes().subscribe(data => {
      this.dataService.makmes = JSON.parse(data[0]);
      this.makmes = this.dataService.makmes;
      this.user = this.makmes.makler;
      console.log(this.makmes);
    });
  }

}
