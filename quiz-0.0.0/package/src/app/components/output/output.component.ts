import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  currentAdIndex = -1;
  interval: any;
  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  loadComponent() {   
    console.log('b4 this.currentAdIndex:',this.currentAdIndex);     
    this.currentAdIndex = (this.currentAdIndex+1) % 4;
    // console.log('this.currentAdIndex:',this.currentAdIndex," (this.currentAdIndex+1) % 4:", (this.currentAdIndex+1) % 4);
    console.log('after this.currentAdIndex:',this.currentAdIndex);
  }

}
