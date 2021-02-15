import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  private toDoListUrl = 'http://localhost:3000/todo';
  constructor(private authService:AuthService) { }

  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    console.log('Interceptor');
    console.log('request.url: ', request.url);
    const token = this.authService.getAuthToken();
    let newHeaders = request.headers;
    if(token){
      newHeaders = newHeaders.append('authtoken',token);
    }
    const authReq = request.clone({headers:newHeaders});
    return next.handle(authReq); 
    /* if(request.url == this.toDoListUrl){

    }
    return next.handle(request); */
  }

}