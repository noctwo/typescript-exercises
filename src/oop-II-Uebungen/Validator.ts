import * as EmailValidator from 'email-validator';

class ValidateEmail {
  static  _email: string = "";

    set email(value:string){
        let validatedMail = EmailValidator.validate(value);
        if(validatedMail === true){
            console.log("true");
            ValidateEmail._email = value;
        } else {
            console.log("false");
            ValidateEmail._email = "";
        }
    }

    get email():string {
        return ValidateEmail._email;
    }

    constructor(email:string){
        this.email = email;
    }
}

export default ValidateEmail;