import { Component, OnInit } from '@angular/core';
import { Coffe } from 'src/app/core/coffe.interface';
import { CoffeDataService } from 'src/app/core/coffe-data.service';

@Component({
  selector: 'app-dashbord-page',
  templateUrl: './dashbord-page.component.html',
  styleUrls: ['./dashbord-page.component.scss'],
})
export class DashbordPageComponent {
  arrayOfCoffee: Coffe[] = [];
  searchValue: string = '';
  searchCoffeName: string = '';

  constructor(private coffeService: CoffeDataService) {}

  ngOnInit(): void {
    this.getListOfCoffe();
  }

  getListOfCoffe() {
    this.arrayOfCoffee = this.coffeService.getListOfCoffe();
  }

  searchCoffe(event: Event) {
    event.preventDefault();
    const listFiltered = this.coffeService.searchByName(this.searchValue);
    this.arrayOfCoffee = listFiltered;
    this.searchCoffeName = this.searchValue;
  }

  coffeListEmpty() {
    return this.arrayOfCoffee.length === 0;
  }

  GetCoffeNameEvent(eventData: string) {
    this.coffeService.orderCoffee(eventData);
  }
}
