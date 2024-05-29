class Owner {
    name:string = "";
    address: string = "";
    zipCode: number = 0;
    city: string = "";
    birthday?: Date;

    constructor (name: string, address: string, zipCode: number, city: string){
    this.name = name;
    this.address = address;
    this.zipCode = zipCode;
    this.city = city
    }
}

export default Owner;