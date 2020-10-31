import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.scss']
})
export class SubChildComponent implements OnInit {

  @Input() dataForSubChild;

  constructor() {
    console.log('sub-child constructor');
   }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges sub-child');
    console.log('changes at sub-child:',changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit sub-child');
  }

  ngDoCheck(){
    console.log('ngDoCheck sub-child');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit sub-child');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked sub-child');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit sub-child');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked sub-child');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy sub-child');
  }

}
