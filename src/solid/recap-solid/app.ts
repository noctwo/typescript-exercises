// ? - Teste das Factory-Pattern, indem du verschiedene Kaffeegetränke bestellst und sicherstellst,
// ? dass die richtige Kaffee-Implementierung verwendet wird.

import { CoffeeShopFactory } from './CoffeeshopFactory';
import { CoffeeType } from './CoffeeType';

// ? Beispiel, wenn die Methoden nicht static wären:
//? const coffeeShopFactory = new CoffeeShopFactory();
// ?coffeeShopFactory.createEspresso

// ? so sieht es mit static Methoden aus: Klassenname.methodenname
console.log(CoffeeShopFactory.createEspresso('medium'));
console.log(CoffeeShopFactory.createAmericano('large'));
console.log(CoffeeShopFactory.create(CoffeeType.Espresso, 'small'));

const smallEspresso = CoffeeShopFactory.create(CoffeeType.Espresso, 'small');
smallEspresso.brew();