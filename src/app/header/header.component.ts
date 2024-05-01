import { Component, OnInit } from '@angular/core';
import { CoffeDataService } from 'src/app/core/coffe-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  orderCoffee: Map<string, any> = new Map<string, any>();

  constructor(private coffeService: CoffeDataService) {}

  ngOnInit(): void {
    this.orderCoffee = this.coffeService.getOrderedCoffee();
  }

  orderNow() {
    this.coffeService.buyCoffe();
  }
}
