import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataResolverService } from '../../services/data-resolver.service';
import { ModalService } from 'src/app/services/modal.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public employeeList;
  public selectedEmpId;
  public isLoader: boolean = false;

  constructor(
    private router: Router,
    private dataResolverService: DataResolverService,
    private modalService:ModalService,
    private loaderService:LoaderService) {

  }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    console.log('Get Fired!');

    this.isLoader = true;
    this.loaderService.showLoader();
    this.dataResolverService.getEmployeeList().subscribe(
      response => {
        console.log('xxxx Response', response);
        this.isLoader = false;
        this.loaderService.hideLoader();
        this.employeeList = response;
      },
      error => {
        console.log('xxxx Error', error);
        this.isLoader = false;
        this.loaderService.hideLoader();
      });
  }

  onDelEmployee(id: number) {
    console.log('Delete Fired!');

    this.isLoader = true;
    this.loaderService.showLoader();
    this.dataResolverService.delEmployee(id).subscribe(
      response => {
        console.log('yyyy Response', response);
        this.isLoader = false;
        this.loaderService.hideLoader();
        this.getEmployeeList();
      },
      error => {
        console.log('yyyy Error', error);
        this.isLoader = false;
        this.loaderService.hideLoader();
      });
  }

  onAdd() {
    console.log('Add Fired!');
    // this.router.navigate(['user', 'add']);
    // this.router.navigate(['/user/add']);
  }

  onEdit() {
    console.log('Edit Fired!');
    // this.router.navigate(['user', 'add', this.selectedEmpId]);
    this.router.navigate([`/user/edit/${this.selectedEmpId}`]);
  }

  loadModal(){
    let htmlData = `<form>
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input">
      <label class="form-check-label">Check me out</label>
    </div>
    <button type="button" class="btn btn-primary">Submit</button>
  </form>`
    this.modalService.openModal(htmlData);
  }

}