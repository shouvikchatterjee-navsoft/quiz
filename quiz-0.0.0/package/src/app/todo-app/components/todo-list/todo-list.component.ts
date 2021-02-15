import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnDestroy, AfterViewChecked, AfterViewInit } from '@angular/core';
import { DataResolverService } from '../../services/data-resolver.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnChanges, OnDestroy, AfterViewChecked, AfterViewInit {

  @Input() toDoItem;
  @Output() deleteItem: EventEmitter<any> = new EventEmitter();
  @Output() deletedItem: EventEmitter<any> = new EventEmitter();
  @Output() toDoArrLength: EventEmitter<any> = new EventEmitter();
  toDoObj;
  toDoArr = [];
  isLoader = false;
  loaderMessage;

  constructor(private dataResolverService: DataResolverService) {

  }

  trackByToDoId(index: number, toDoData: any): string {
    return toDoData.id;
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges()',changes);     
    if (this.toDoItem) {
      this.onAddData();
    }
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked()');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy()');
  }
  
  onAddData() {
    this.toDoObj = { 'toDoData': this.toDoItem };
    this.loaderMessage = `Adding ${this.toDoItem}...`;
    this.isLoader = true;
    this.dataResolverService.addToDoData(this.toDoObj).subscribe(response => {
      console.log('addToDoData(): ', response);
      this.getToDoDatas();
    },
      error => {
        console.log('error: ', error);
        this.isLoader = false;
      });
  }
  getToDoDatas() {
    // console.log('getToDoDatas()');
    this.dataResolverService.getToDoDatas().subscribe(response => {
      console.log('getToDoDatas(): ', response);
      //this.toDoArr = [];
      this.toDoArr = response;
      this.isLoader = false;
      this.toDoArrLength.emit(this.toDoArr.length);
    },
      error => {
        console.log('error: ', error);
        this.isLoader = false;
      });
  }
  onDeleteItem(item, id) {
    console.log('onDeleteItem()');
    this.isLoader = true;
    this.loaderMessage = `Deleting ${item}...`;

    /* for (let i = 0; i < this.toDoArr.length; i++) {
      if (id == this.toDoArr[i].id) {
        this.toDoArr.splice(i, 1);
        break;
      }
    } */

    this.dataResolverService.deleteToDoData(id).subscribe(response => {
      console.log('deleteToDoData(): ', response);
      this.deleteItem.emit(true);
      this.deletedItem.emit(item);

      this.isLoader = false;
      this.getToDoDatas();
    },
      error => {
        console.log('error: ', error);
        this.isLoader = false;
      });
  }
}