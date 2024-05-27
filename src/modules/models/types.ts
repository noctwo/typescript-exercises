// * types sollten auch im Ordner models liegen
type Address = {
    street: string;
    postalCode: string;
    city: string;
  };
  
  type Customer = {
    number: number;
    name: string;
    address: Address;
  };
  // ? am besten alphabetisch sortierte Exports
  export { Address, Customer };