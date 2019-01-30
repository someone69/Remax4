import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

declare var jquery: any;
declare var $: any;

import { Makler } from "../models/makler";
import { Makmes } from "../models/makmes";

@Injectable()
export class DataService {
  team: Makler[] = [{
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
  }] ;
  makmes: Makmes = {
    "url": "",
    "html": "",
    "name": "",
    "house": {
      "pic": "",
      "price": "",
      "title": "",
      "address": "",
      "propid": "",
      "rooms": "",
      "size": ""
    }
  };
    
  //teamUrl: string = "../assets/users.json";
  teamUrl: string =   "http://remaxdunajskastreda.sk/php/team.json";
  makmesUrl: string = "http://remaxdunajskastreda.sk/php/makmes.json";
  scrapeUrl: string = "http://remaxdunajskastreda.sk/php/scrape.php?link=";
  saveMakmesUrl: string = "http://remaxdunajskastreda.sk/php/savemakmes.php";
  saveTeamUrl: string = "http://remaxdunajskastreda.sk/php/saveteam.php";



  constructor(private http: HttpClient, private h: Http) {

  }

  ngOnInit() {
    
  }

  loadTeam(): Observable<Makler[]> {
    return this.http.get<Makler[]>(this.teamUrl);
  }

  saveTeam(team: Makler[]){
    const req = this.http.post(this.saveTeamUrl, team)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  getMakler(index): Observable<Makler> {
    return this.http.get<Makler[]>(this.teamUrl)[index];
  }

  addMakler(makler: Makler) {
    this.team.unshift(makler);
  }

  setMakmes(makmes: Makmes) {
    this.makmes = makmes;
  }

  getMakmes(): Makmes {
    return this.makmes;
  }

  loadMakmes(): Observable<Makmes> {
    return this.http.get<Makmes>(this.scrapeUrl + this.makmesUrl);
  }

  processMakmes(makmes: Makmes) {
    this.makmes = makmes;
    this.getPage(makmes.url).subscribe(data => {
      makmes.html = data[0];
      var LI = $(makmes.html);
      makmes.name = LI.find('div.broker-details').find('h4').find('a').text();
      makmes.firstName = makmes.name.substr(0, makmes.name.indexOf(" "));
      makmes.lastName = makmes.name.substr(makmes.name.indexOf(" ") + 1, makmes.name.length - 1);
      //var proplink = LI.find('.image-link').attr('href');
      makmes.house.pic = LI.find('div.ad-image a').attr('href');
      makmes.house.title = LI.find('h1[itemprop="name"]').text();
      makmes.house.address = LI.find('td[itemprop="address"]').text();
      makmes.house.price = LI.find('span[itemprop="priceRange"]').text().replace('/Za nehnuteľnosť', '');
      makmes.house.size = LI.find('td:contains("Celková plocha")').next().text();
      makmes.house.propid = LI.find('td:contains("Číslo zakázky")').next().text();
      makmes.makler = this.team.find(e => e.lastName == makmes.lastName && e.firstName == makmes.firstName);
    });
  }


  saveMakmes(makmes: Makmes) {
    makmes.html = "";
    console.log(makmes);
    const req = this.http.post(this.saveMakmesUrl, makmes)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

  getPage(link: string): Observable<string[]> {
    return this.http.get<string[]>(this.scrapeUrl + link);
  }

  /*   getName(link: string) {
       $.get(this.scrape + link, data =>{
        data = JSON.parse(data) 
        console.log(data.test);
        var name: string = $('<div>' + data.content + '</div>').find('div.broker-details').find('h4').find('a').html();
      })
    } */

}
