import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrls: ['./todo-data.component.scss']
})
export class TodoDataComponent {
  toDoValue;
  numberOfToDoItems;
  isDelete;
  source = timer(2000);
  deletedItem;

  /**
   * Add new To Do in List
   * @param val = target value
   */
  addToDoList(e) {
    console.log('addToDoList()');
    console.log('prev val: ', this.toDoValue);

    //let prevValue = this.toDoList;
    const item = e.target.value;

    if (item !== '') {
      // this.toDoList.push(item); 
      this.toDoValue = item;
      /*  if(item === prevValue)  {
         this.toDoValue='';
         this.numberOfToDoItems = undefined;
       }else{
         this.toDoValue = item;
       } */
    }
    console.log('current val: ', this.toDoValue);
    e.target.value = '';
  }

  /**
   * Delete ToDo item from List
   * @param val = target value
   */
  onDelete(e) {
    console.log('onDelete()');
    this.isDelete = e;
    this.hideDeleteMessage();
  }

  onDeleteItem(e) {
    this.deletedItem = e;
  }

  hideDeleteMessage() {
    console.log('hideDeleteMessage()');
    this.source.subscribe(val => {
      this.isDelete = false;
      if (this.numberOfToDoItems == 0) { //checking to remove <app-todo-list> from the DOM
        this.toDoValue = undefined;
      }
    },
      error => {
        console.log(error);
      });
  }

  /**
   * Check no. of ToDo items is 1 or not
   * @param val = target value
   */
  checkArrayLength(e) {
    console.log('checkArrayLength: ', e);
    this.numberOfToDoItems = e;
  }
}