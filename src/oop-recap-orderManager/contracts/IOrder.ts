import ICustomer from './ICustomer';
import IProduct from './IProduct';

interface IOrder {
  id?: string;
  customer: ICustomer;
  products: IProduct[];
  orderDate: Date;
}

export default IOrder;

// ? type könnte ich auch alternativ verwenden - dann kann ich aber keine Klassen davon ableiten mit implements
// ? ist sonst relativ gleichwertig zum Interface - Interface wird oft als eleganter angesehen
// type OrderType = {
//   id: string;
//   customer: ICustomer;
//   products: IProduct[];
//   orderDate: Date;
// };