import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pizza } from '../model/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  data = [
    { fName: 'Prosenjit', lName: 'Saha' },
    { fName: 'Souvik', lName: 'Dey' },
    { fName: 'Nabanita', lName: 'Roy' },
    { fName: 'Estilo', lName: 'Chatterjee' },
  ]

  getPizzas$: Observable<Pizza[]> = of([
    { id: "j8P9sz", name: "Pepperoni", price: 899 },
    { id: "tMot06", name: "Supreme", price: 999 },
    { id: "x9sD3g", name: "Sizzler", price: 899 },
  ]);
}
