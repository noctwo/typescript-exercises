class Customer{
    _name: string = "";
    _email: string = "";
    address: string = "";
    _zipCode: number = 0;

    get name (){
        return this._name;
    }

    get email(){
        return this._email;
    }

    get zipCode(){
        return this._zipCode;
    }

    set name(value:string){
        if(value.length > 60){
            this._name = "";
            console.log("Name must be shorter than 60 Charackters.");
        } else {
            this._name = value;
        }
    }

    set email(value:string){
        if(value.includes("@")){
            this._email = value;
        } else {
            console.log("E-Mail must include '@'");
        }
    }

    set zipCode(value:number){
        let zipToString = value.toString();
        if(zipToString.length < 5 || value < 0 || value > 99999){
            console.log("ZipCode must be 5 digits and between '00000' and '99999'.");
        } else {
            this._zipCode = value;
        }
    }
}

export default Customer;