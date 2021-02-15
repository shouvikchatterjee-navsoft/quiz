import { Component, OnInit } from '@angular/core';
import {TestService} from 'src/app/services/test.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  datas = [];
  tableColumn = [];
  constructor(private ts:TestService) { }

  ngOnInit(): void {
    this.datas = this.ts.ob;
    this.tableColumn = Object.keys(this.datas[0]);
  }
}