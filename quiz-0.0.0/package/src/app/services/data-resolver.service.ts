import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService {
  url = `http://localhost:3000/cart`

  constructor(private http:HttpClient) { 

  }

  getItemList():Observable<any>{
    return this.http.get(this.url);
  }
}
