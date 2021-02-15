import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  data;
  // @Input() dataForChild;
  // @Input() data1;

  constructor() {
    console.log('child constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges child');
    console.log('changes at child:', changes);
    /* let change: SimpleChange = changes.dataForChild;
    // console.log('changes.data1.previousValue: ', changes.data1.previousValue);
    // console.log('changes.data1.currentValue: ', changes.data1.currentValue);
    console.log('change.previousValue: ', change.previousValue);
    console.log('change.currentValue: ', change.currentValue); */
    
  }

  ngOnInit(): void {
    console.log('ngOnInit child');
    this.data = 'sub-child data from child.';
  }

  ngDoCheck() {
    console.log('ngDoCheck child');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit child');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked child');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit child');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked child');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy child');
  }

}
