import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  count;
  count1;
  count2;
  count3;
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.count = this.cartService.getCount();
    this.count1 = this.cartService.getCount1();
    this.count2 = this.cartService.getCount2();
    this.count3 = this.cartService.getCount3();
  }

  addToCart(item) {
    switch (item) {
      case 'prod1': {
        this.count1++;
        this.cartService.setCount1(this.count1);
        break;
      }
      case 'prod2': {
        this.count2++;
        this.cartService.setCount2(this.count2);
        break;
      }
      case 'prod3': {
        this.count3++;
        this.cartService.setCount3(this.count3);
        break;
      }
    }
    this.count++;
    this.cartService.setCount(this.count);
  }

  removeFromCart(item) {
    switch (item) {
      case 'prod1': {
        if (this.count1 > 0) {
          this.count1--;
        }
        this.cartService.setCount1(this.count1);
        break;
      }
      case 'prod2': {
        if (this.count2 > 0) {
          this.count2--;
        }
        this.cartService.setCount2(this.count2);
        break;
      }
      case 'prod3': {
        if (this.count3 > 0) {
          this.count3--;
        }
        this.cartService.setCount3(this.count3);
        break;
      }
    }
    this.count--;
    this.cartService.setCount(this.count);
  }
}
