import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifeCycleComponent {    
    // data:number=100;
    constructor() {
    //     console.log(`new - data is ${this.data}`);
     }
    // ngOnChanges() {
    //     console.log(`ngOnChanges - data is ${this.data}`);
    // }
    // ngOnInit() {
    //     console.log(`ngOnInit  - data is ${this.data}`);
    // }
    // ngDoCheck() {
    //     console.log("ngDoCheck")
    // }
    // ngAfterContentInit() {
    //     console.log("ngAfterContentInit");
    // }
    // ngAfterContentChecked() {
    //     console.log("ngAfterContentChecked");
    // }
    // ngAfterViewInit() {
    //     console.log("ngAfterViewInit");
    // }
    // ngAfterViewChecked() {
    //     console.log("ngAfterViewChecked");
    // }
    // ngOnDestroy() {
    //     console.log("ngOnDestroy");
    // }
    // fnAddNumber():void{
    //     this.data+=100;
    // }
    // deleteNumber():void{
    //     this.data -=10;
    // }
    moviesArr: any[] = [
        {
          "id": 1,
          "title": "Super Man"
        },
        {
          "id": 2,
          "title": "Spider Man"
        },
        {
          "id": 3,
          "title": "Shouvik"
        }, 
        {
          "id": 4,
          "title": "Downton Abbey"
        },
        {
          "id": 5,
          "title": "Estilo"
        }
      ];
       
       trackByMethod(index:number, el:any): number {
        return el.title;
      }
      //Rest operator
      myFunction(...nums):void{
        //console.log(arguments);
        console.log(nums);
      }
      // myFunction(1,2,3,4,5);   
      addVal():void{
        this.moviesArr.push({"id":6,"title":"Indra"});
        console.log(this.moviesArr);
      }
      delVal():void{
        this.moviesArr.pop();
        console.log(this.moviesArr);
      }       
}