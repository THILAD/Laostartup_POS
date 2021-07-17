import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.scss']
})
export class MainhomeComponent implements OnInit {
  setlaodate:any=moment.locale('lo');
public mydatetime:any= moment().format('LLLL');
  constructor() { }

  ngOnInit(): void {
  }

}
