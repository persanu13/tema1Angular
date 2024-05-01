import { Injectable } from '@angular/core';
import { Coffe } from './coffe.interface';

@Injectable({
  providedIn: 'root',
})
export class CoffeDataService {
  private listOfCoffe: Coffe[] = this.composeListOfCoffe();
  private orderedCoffe: Map<string, any> = new Map<string, any>();
  constructor() {}

  getListOfCoffe(): Coffe[] {
    return this.listOfCoffe;
  }

  orderCoffee(coffeName: string) {
    let coffeeNumber: number = 1;
    if (this.orderedCoffe.has(coffeName)) {
      coffeeNumber = this.orderedCoffe.get(coffeName) + 1;
    }
    this.orderedCoffe.set(coffeName, coffeeNumber);
  }

  buyCoffe() {
    this.orderedCoffe.clear();
  }

  getOrderedCoffee(): Map<string, any> {
    return this.orderedCoffe;
  }

  searchByName(vales: string): Coffe[] {
    return this.listOfCoffe.filter((coffe: Coffe) =>
      coffe.name.toLowerCase().includes(vales.toLowerCase())
    );
  }

  private composeListOfCoffe(): Coffe[] {
    return [
      {
        id: 0,
        price: 3.5,
        name: 'Love Coffee',
        image: 'assets/coffe-images/3 Small Tweaks to Improve Your Health.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 1,
        price: 5.99,
        name: 'Hot Coffee',
        image:
          'assets/coffe-images/13 Fantastic Ways to Make Hot Chocolate Even Better.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 2,
        price: 7.02,
        name: 'Chocholate Coffee',
        image:
          '/assets/coffe-images/Tahini Chocolate Coffee Date Shake _ Ambitious Kitchen.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 3,
        price: 1.0,
        name: 'Latte Coffee',
        image: 'assets/coffe-images/Maple Cinnamon Latte.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 4,
        price: 7.99,
        name: 'A Coffee Cup',
        image:
          'assets/coffe-images/A Coffee Cup Project _ Josh Haras Smart Art.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 5,
        price: 8.99,
        name: 'Hot Coffe',
        image:
          'assets/coffe-images/Holiday Spiced Café Au Lait - The Local Palate.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 6,
        price: 4.5,
        name: 'Caramel Iced Coffe',
        image: 'assets/coffe-images/Easy Homemade Caramel Iced Coffee.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 7,
        price: 7.1,
        name: 'Indian Coffee',
        image:
          'assets/coffe-images/DALgona Coffee - Indian whipped coffee - MADaboutkitchen.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 8,
        price: 5.5,
        name: 'Starbucks Coffee',
        image:
          "assets/coffe-images/Here's A List Of Ingredients You May Not Be Able To Order Anymore At Starbucks.jpeg",
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 9,
        price: 4.99,
        name: 'Boozy Whipped Coffee',
        image: 'assets/coffe-images/Boozy Whipped Coffee.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 10,
        price: 3.4,
        name: 'Biscoff Cloud Coffee',
        image: 'assets/coffe-images/Biscoff Cloud Coffee recipe.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
      {
        id: 11,
        price: 7.6,
        name: 'Frothy Whipped Coffee White',
        image: 'assets/coffe-images/Frothy Whipped Coffee White Russian_.jpeg',
        description: 'Lorem ipsum dolor sit amet dep.',
      },
    ];
  }
}
