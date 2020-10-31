import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';
import { PipeService } from 'src/app/services/pipe.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  dateObj;
  textLowerCase;
  textUpperCase;
  currencyVal = 20;
  numberForDecimalPipe;
  numberForPercentPipe;
  timeInterval = interval(1000);
  inputDecimalArr = [];
  inputPercentArr = [];
  jsonObj;
  time;

  constructor(private pipeService:PipeService) { }

  ngOnInit(): void {
    this.showDate();
    this.showJson();
    this.showAsync();
  }

  showDate() {
    this.timeInterval.subscribe(res => {
      this.dateObj = new Date();
      // console.log(this.dateObj);
    }, error => {
      console.log('error');
    });
    // this.dateObj = new Date();  
  }

  /* checking for decimal no. only
    if in the begining . will be entered it will convert it to 0. and 
    . will be entered only once because number pipe applies on number type variables only */
  updateNumberArr() {
    console.log('updateNumberArr');
    if (this.numberForDecimalPipe == '.') {
      this.numberForDecimalPipe = '0.';
    }
    let str: string = this.numberForDecimalPipe;
    this.inputDecimalArr = str.split('');
    // console.log('numberForDecimalPipe: ', this.numberForDecimalPipe);
    // console.log(this.inputArr);    
  }
  decimalNumberOnlyForDecimalPipe(event): boolean {
    console.log('decimalNumberOnlyForDecimalPipe');
    const charCode = event.keyCode;

    let isDotEntered;
    if (charCode == 46) {
      isDotEntered = this.inputDecimalArr.includes('.');
      // console.log('isDotEntered: ', isDotEntered);
    }
    if ((charCode == 46 && !isDotEntered) || (charCode >= 48 && charCode <= 57)) {
      return true;
    }
    return false;
  }
  /*---------------------------------------------------------------------*/
  updatePercentArr() {
    if (this.numberForPercentPipe == '.') {
      this.numberForPercentPipe = '0.';
    }
    let str: string = this.numberForPercentPipe;
    this.inputPercentArr = str.split('');
    // console.log('numberForDecimalPipe: ', this.numberForDecimalPipe);

    // console.log(this.inputArr);    
  }
  decimalNumberOnlyForPercentPipe(event): boolean {
    const charCode = event.keyCode;
    let isDotEntered;
    if (charCode == 46) {
      isDotEntered = this.inputPercentArr.includes('.');
      // console.log('isDotEntered: ', isDotEntered);
    }
    if ((charCode == 46 && !isDotEntered) || (charCode >= 48 && charCode <= 57))  {
      return true;
    }
    return false;
  }

  showJson(){
    this.pipeService.getEmployees().subscribe(resolve=>{
      console.log(resolve);
      this.jsonObj = resolve;
    },reject=>{
      console.log(reject);
    });
  }
  showAsync(){
    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }
}
