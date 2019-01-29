import { Component, OnInit } from '@angular/core';
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
  users: Makler[];
  user: Makler;
  data: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    /*    this.dataService.getUsers().subscribe(data =>{
         this.users = data;
         this.user = this.users[5];
         // console.log(this.user.tel);
       }); */

    this.makmes = this.dataService.getMakmes();
    console.log(this.makmes);

    this.user = this.makmes.makler;
  }

}
