import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sowmit',
  templateUrl: './sowmit.component.html',
  styleUrls: ['./sowmit.component.scss'],
})
export class SowmitComponent implements OnInit {
  nameList = [
    'estilo',
    'sarkar',
    'bingo',
    'rosen',
    'piklu',
    'rana',
    'ghutung',
    'zeus',
  ];
  // a,b,add,sub,div,mul

  numArr = [];

  constructor() {}

  ngOnInit(): void {
    /*
    // for(i=1-100)
    // this.numArr.push(i);
  */
  }
}
