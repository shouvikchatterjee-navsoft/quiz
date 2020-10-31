import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public data;
  public isVisible = false;
  promise;
  completed = true;
  progValue = 0;
  progress = 0;
  time;

  constructor(
    private testService: TestService
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit', this.progValue);
    this.data = this.testService.data;
    this.promise = new Promise((resolve, reject) => {
      if (this.completed) {
        resolve('It has been resolved.');
      } else {
        reject('It has been rejected.');
      }
    });
    console.log(this.promise);
    this.time = setInterval(this.updateProg, 1000);
  }

  updateProgress(e) {
    console.log('updateProgress');
    let val = e.target.value;
    let prog;
    val = Number(val);
    if (val > 0 && val <= 500) {
      this.progValue = e.target.value;
      this.progress = ((this.progValue / 500) * 100);
      prog = String(this.progress.toFixed(2));
      this.progress = Number(prog);
      console.log(this.progress);
    }
  }

  updateProg() {
    this.progValue = Number(this.progValue);
    console.log('this.progValue:', this.progValue);
    this.progValue++;
    this.progress = Math.ceil((this.progValue / 500) * 100);
    if (this.progValue < 1 || this.progValue > 500) {
      clearInterval(this.time);
    } else {
      this.time = setInterval(this.updateProg, 1000);
    }
  };
}
