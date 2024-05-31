class IceCreamFlavor {
    name: string = "";
    price: number = 0;
    isPopular: boolean = false;
    description?: string = undefined;

    getTotalPrice (numberOfScoops:number):number{
            return numberOfScoops * this.price;
        }

    printInfo(){
        console.log(`Flavor ${this.name} is popular and costs ${this.price}.`)
    }
}

export default IceCreamFlavor