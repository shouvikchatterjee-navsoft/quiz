import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  data;
  parentData;
  data1;
  data2;
  date;
  
  constructor() {
    console.log('parent constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit parent');
    this.data = 'Child data from parent.';
    this.data1 = 'Parent Data1';
    this.data1 = 'Parent Data1';
    this.data2 = 'Parent Data2';
    this.parentData = 'Parent Data';
    /* setInterval(()=>{
      this.date=new Date();
      // console.log(this.date);
    },1000); */
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges parent');
  }

  ngDoCheck() {
    console.log('ngDoCheck parent');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit parent');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked parent');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit parent');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked parent');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy parent');
  }
  clickParent(){
    console.log('parent clicked!');
    this.data = (this.data !== 'a')?'a':'b';
    this.data1 = (this.data1 !== 'c')?'c':'d';
    this.data2 = (this.data2 !== 'e')?'e':'f';
  }
}
