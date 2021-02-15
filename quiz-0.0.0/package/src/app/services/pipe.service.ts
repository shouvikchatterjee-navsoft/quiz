import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PipeService {
  url = 'http://localhost:3000/todo';
  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>{
    return this.http.get(this.url);
  }

}
