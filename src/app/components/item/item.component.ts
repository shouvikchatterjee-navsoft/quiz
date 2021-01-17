import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataResolverService } from 'src/app/services/data-resolver.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  items: any[] = [];
  count;
  count1;
  count2;
  count3;
  constructor(
    private router: Router,
    private cartService: CartService,
    private dataResolverService: DataResolverService
  ) {}

  ngOnInit(): void {
    this.dataResolverService.getItemList().subscribe((item) => {
      this.items = item;
      this.showItems();
    });

    this.count = this.cartService.getCount();
    this.count1 = this.cartService.getCount1();
    this.count2 = this.cartService.getCount2();
    this.count3 = this.cartService.getCount3();
  }

  showItems() {
    console.log('this.items:', this.items);
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
  openCart() {
    this.router.navigate(['cart']);
  }
}
