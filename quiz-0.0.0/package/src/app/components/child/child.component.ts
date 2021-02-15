import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() check;
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  update(){
    //this.cd.detectChanges();
    console.log('check: ',this.check);
  }

}