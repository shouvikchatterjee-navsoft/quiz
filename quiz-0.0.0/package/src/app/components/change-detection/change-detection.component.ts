import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  
})
export class ChangeDetectionComponent implements OnInit,DoCheck {
  val = '';
  constructor() { }

  ngOnInit(): void {
  }

  checkChange(){
    if(this.val === ''){
      this.val = 'Estilo';
    }else{
      this.val = '';
    }
    console.log('val: ',this.val);
  }

  ngDoCheck(){
    console.log('DoCheck fired');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit fired');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked fired');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit fired');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked fired');
  }
}