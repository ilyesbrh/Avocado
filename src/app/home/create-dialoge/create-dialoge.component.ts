
import { Component, OnInit, ElementRef, ViewChild, Renderer2, ContentChild } from '@angular/core';
import { affairTypes, affair, VoidAffairBuilder } from 'src/Store/model';
import { DatabaseApiService } from 'src/app/database-api.service';
declare function require(path: string): any;
var moment = require('moment');

@Component({
  selector: 'app-create-dialoge',
  templateUrl: './create-dialoge.component.html',
  styleUrls: ['./create-dialoge.component.css']
})
export class CreateDialogeComponent implements OnInit {

  Types = [];
  backgrounds = [];

  @ViewChild("card", { read: ElementRef }) el: ElementRef;
  @ContentChild('card', { read: ElementRef }) card;
  data: affair;

  time: string = "";
  date: string = "";


  constructor(private dbService:DatabaseApiService) {
    this.getTypesFromEnum(this.Types);
  }

  private getTypesFromEnum(arr: any) {
    const obj = Object.values(affairTypes);
    for (let i = 0; i < obj.length / 2; i++) {
      arr.push({ name: obj[i], value: obj[i + obj.length / 2] });
    }
  }

  getbackgroundsArry(backgrounds: any) {

    for (let i = 1; i < 41; i++) {
      backgrounds.push({ name: 'background ' + i, value: i });
    }
  }
  ngOnInit() {
    this.data = VoidAffairBuilder();
  }

  changedate() {

    console.log(this.date);
    console.log(this.time);
    try {
      let times = this.time.split(':');
      let datetime = moment(this.date).hour(times[0]).minute(times[1]);
      this.data.audienceDate = datetime.format('YYYY-MM-DD HH:mm:ss');
      console.log(this.data);

    } catch (error) { }
  }
  onCreate() {
    console.log(this.data);
    this.dbService.createAffair(this.data);
  }
}
