import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { DataResolverService } from '../../services/data-resolver.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  private paramId;
  public empForm;
  public isLoader: boolean = false;
  public blankDataModel = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    cell: '',
    address: {
      building: '',
      landMark: '',
      post: '',
      state: null,
      pinCode: ''
    },
    department: '',
    designation: ''
  };
  public submitButtonValue = 'Submit';
  public heading = 'Add Employee';
  public states = [ 'Andhra Pradesh',
                'Arunachal Pradesh',
                'Assam',
                'Bihar',
                'Chhattisgarh',
                'Goa',
                'Gujarat',
                'Haryana',
                'Himachal Pradesh',
                'Jammu and Kashmir',
                'Jharkhand',
                'Karnataka',
                'Kerala',
                'Madhya Pradesh',
                'Maharashtra',
                'Manipur',
                'Meghalaya',
                'Mizoram',
                'Nagaland',
                'Odisha',
                'Punjab',
                'Rajasthan',
                'Sikkim',
                'Tamil Nadu',
                'Telangana',
                'Tripura',
                'Uttarakhand',
                'Uttar Pradesh',
                'West Bengal',
                ]
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataResolverService: DataResolverService,
    private loaderService:LoaderService) {}

  ngOnInit() {
    console.log('ngOnInit()');

    this.activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.paramId = param.id;
        this.getEmployee(param.id);
        this.submitButtonValue = 'Update';
        this.heading = 'Edit Employee';
      } else {
        this.initEmpForm(this.blankDataModel);
        this.submitButtonValue = 'Submit';
        this.heading = 'Add Employee';
      }
    });
  }

  initEmpForm(data) {
    console.log('initEmpForm()');

    this.empForm = this.fb.group({
      firstName: [data.firstName, [Validators.required, Validators.minLength(2)]],
      lastName: [data.lastName, [Validators.required, Validators.minLength(2)]],
      email: [data.email, [Validators.required, Validators.email]],
      cell: [data.cell, [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]], 
      age: [data.age, [Validators.required,Validators.pattern('[0-9]*')]],
      address: this.fb.group({
        building: [data.address.building, [Validators.required, Validators.minLength(3)]],
        landMark: [data.address.landMark, [Validators.required, Validators.minLength(3)]],
        post: [data.address.post, [Validators.required, Validators.minLength(3)]],
        state: [data.address.state, [Validators.required]],        
        pinCode: [data.address.pinCode, [Validators.required, Validators.minLength(6), Validators.maxLength(6),Validators.pattern('[0-9]*')]],
      }),
      department: [data.department, [Validators.required, Validators.minLength(4)]],
      designation: [data.designation, [Validators.required, Validators.minLength(4)]],
    });
  }

  getEmployee(id: number) {
    console.log('getEmployee()', id);
    this.isLoader = true;
    this.loaderService.showLoader();
    this.dataResolverService.getEmployee(id).subscribe(
      res => {
        console.log('Get Response', res);
        this.isLoader = false;
        this.loaderService.hideLoader();
        this.initEmpForm(res);
        // this.empForm.markAsTouched();
      },
      err => {
        console.log('Get Error', err);
        this.isLoader = false;
        this.loaderService.hideLoader();
      });
  }

  onSubmit() {
    this.isLoader = true;
    this.loaderService.showLoader();
    this.paramId ? this.updateData(this.paramId, this.empForm.value) : this.addData();
  }

  addData() {
    this.dataResolverService.addEmployee(this.empForm.value).subscribe(
      res => {
        console.log('Post Response', res);
        this.isLoader = false;
        this.loaderService.hideLoader();
        this.onCancel();
      },
      err => {
        console.log('Post Error', err);
        this.isLoader = false;
        this.loaderService.hideLoader();
      });
  }

  updateData(id, data) {
    this.dataResolverService.updateEmployee(id, data).subscribe(
      res => {
        console.log('PUT Response', res);
        this.isLoader = false;
        this.loaderService.hideLoader();
        this.onCancel();
      },
      err => {
        console.log('PUT Error', err);
        this.isLoader = false;
        this.loaderService.hideLoader();
      });
  }

  onReset() {
    console.log('onReset()');
    this.empForm.reset();
  }

  onCancel() {
    console.log('onCancel()');
    this.router.navigate(['/user']);
  }

}