import Breed from './Breed';
import Owner from './Owner';

class Dog {
  name: string;
  age: number;
  owner: Owner;
  breed: Breed = new Breed('Unbekannt');
  favoriteFood?: string;
  numberOfMeals: number = 0;
  // * dann der Konstruktor
  constructor(name: string, age: number, owner: Owner) {
    this.name = name;
    this.age = age;
    this.owner = owner;
    console.log('Dog was created');
  }

  sleep(): void {
    console.log(`${this.name} is sleeping...`);
  }
  bark(sound: string): void {
    console.log(`${this.name} says ${sound}`);
  }

  isHungry(): boolean {
    if (this.numberOfMeals > 4) {
      return false;
    }
    return true;
  }

  eat(): void {
    this.numberOfMeals++;
    console.log('Current number of meals: ', this.numberOfMeals);
  }
}

export default Dog;