import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class DataService {
  data = [
    {
      button:'Button1',
      title:'Title1',
      bodyText:`<form>
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
    },
    {
      button:'Button2',
      title:'Title2',
      bodyText:`<div class="my-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
      <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
      <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
      <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
      <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
      <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
      <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>
      <div class="mb-2">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</div>`
    },
    {
      button:'Button3',
      title:'Title3',
      bodyText:`<div class="d-flex justify-content-center align-items-center" style="height:300px;"><img src="../../../../assets/1.jpg" class="rounded" alt="img"></div>
      <div class="text-center mb-4" style="width:80%; margin:auto;">Lorem ep sum.Lorem ep sum.Lorem ep sum.Lorem ep sum.Lorem ep sum.Lorem ep sum.Lorem ep sum.Lorem ep sum.Lorem ep sum.Lorem ep sum.Lorem ep sum.</div>`
    },
    {
      button:'Button4',
      title:'Title4',
      bodyText:`<div>The Angular default change detection mechanism is actually quite similar to Angular 1: it compares the values of templates expressions before and after a browser event to see if something changed. It does so for all components. But there are also some important differences:</div>`
    },
    {
      button:'Button5',
      title:'Title5',
      bodyText:`<div>This is <b>fifth modal</b>.This is <b>fifth modal</b>.This is <b>fifth modal</b>.This is <b>fifth modal</b>.This is <b>fifth modal</b>.This is <b>fifth modal</b>.This is <b>fifth modal</b>.This is <b>fifth modal</b>.This is <b>fifth modal</b>.This is <b>fifth modal</b>.This is <b>fifth modal</b>.This is <b>fifth modal</b>.</div>`
    }
  ]
}