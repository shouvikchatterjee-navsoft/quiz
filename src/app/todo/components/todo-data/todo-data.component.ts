import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { DataResolverService } from '../../services/data-resolver.service';
import { ModalService } from '../../../services/modal.service';
import { LoaderService } from '../../../services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrls: ['./todo-data.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoDataComponent {
  isFirstTimeLoading = true;
  toDoList = [];
  deletedItem;
  loaderMessage;
  isLoader;
  isError = false;
  error;
  toDoObj;

  constructor(
    private dataResolverService: DataResolverService,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit() {
    //this.changeDetectorRef.detectChanges();
    this.loaderMessage = 'Loading...';
    this.isLoader = true;
    this.dataResolverService.getToDoDatas().subscribe(
      (response) => {
        console.log('getToDoDatas(): ', response);
        this.toDoList = response;
        this.isFirstTimeLoading = false;
        this.isLoader = false;
        this.isError = false;
      },
      (error) => {
        console.log('Error: ', error);
        this.isLoader = false;
        this.isError = true;
        this.error = error;
      }
    );
  }

  /**
   * Add new To Do in List
   * @param val = target value
   */
  addToDoList(e) {
    const item = e.target.value;
    if (item !== '') {
      this.onAddData(item);
    }
    e.target.value = '';
  }

  onAddData(toDoItem) {
    this.toDoObj = { toDoData: toDoItem };
    this.loaderMessage = `Adding ${toDoItem}...`;
    this.isLoader = true;
    this.dataResolverService.addToDoData(this.toDoObj).subscribe(
      (response) => {
        console.log('addToDoData(): ', response);
        this.isLoader = false;
        this.isError = false;
        this.toDoList.push(response);
        console.log('this.toDoList :', this.toDoList);
      },
      (error) => {
        console.log('error: ', error);
        this.isLoader = false;
        this.isError = true;
      }
    );
  }

  /**
   * Delete ToDo item from List
   * @param val = target value
   */
  deleteItem(item) {
    this.deletedItem = item.toDoData;
    this.isLoader = true;
    this.loaderMessage = `Deleting ${item.toDoData}...`;

    this.dataResolverService.deleteToDoData(item.id).subscribe(
      (response) => {
        this.isLoader = false;
        this.isError = false;
        for (let i = 0; i < this.toDoList.length; i++) {
          if (item.id == this.toDoList[i].id) {
            this.toDoList.splice(i, 1);
            break;
          }
        }
      },
      (error) => {
        console.log('error: ', error);
        this.isLoader = false;
        this.isError = true;
      }
    );
  }

  loadModal() {
    let htmlData = `<div class="my-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
    <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
    <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
    <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
    <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
    <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
    <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
    <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>`;
    this.modalService.openModal(htmlData);
  }

  onClickUser() {
    this.router.navigate([{outlets: {primary: 'change', other: 'modal'}}]);
  }
}
