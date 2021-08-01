import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  setlaodate:any=moment.locale('lo');
public mydatetime:any= moment().format('LLLL');
  constructor() { }

  ngOnInit(): void {
  }

}
