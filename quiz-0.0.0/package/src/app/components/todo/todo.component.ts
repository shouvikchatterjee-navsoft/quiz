import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  // public todoList = [5,6,3,4,7];
  public todoList = [];
  public isHint = false;

  ngOnInit(){
   /* let a = this.todoList.reduce((i,j,index):number=>{
      console.log('i: ',i);
      console.log('j: ',j);
     return this.reduce[index] = i-j;
    })
    console.log('reduce: ',this.reduce);
    console.log('a: ',a); */
  }

  /**
   * Add new To Do in List
   * @param val = target value
   */
  addToDoList(val) {
    // console.log('addToDOList()', val);
    let map = [];
    let reduce =[];
    let filter = [];
       if (val){
      this.todoList.push(val);
      this.todoList = [...this.todoList];
      this.todoList.map((value,index)=>
        map[index] = value
      );      
      // console.log('map: ',map);
      // console.log('this.todoList.indexOf(chotu): ', this.todoList.indexOf('chotu'));
      this.todoList.reduce((i,j,index):number=>{        
        return reduce[index] = i+j;        
      })
      //  console.log('reduce: ',reduce);
      //  console.log('this.todoList.reverse(): ',this.todoList.reverse());
      // console.log('this.todoList.sort(): ',this.todoList.sort());
      this.todoList.filter((val,index)=>{
          if(val>3){
            filter[index] = val;
          }
      })
      // console.log('filter:', filter);
      
    }
  }

  handleItemDel(e) {
    this.isHint = e;
    
  }
}