// Allows the selection of an algorithm's behavior at runtime.
// The Strategy Pattern is like choosing the best tool for the job. 
// It allows you to define a family of interchangeable algorithms (strategies) and select
//  which one to use at runtime without changing the code that uses them.

class CreditCard {
    pay() {
        console.log("Credit card payment successful")
    }

}

class DebitCard {
    pay() {
        console.log("Debit card payment successful")
    }

}
class UPI {
    pay() {
        console.log("UPI payment successful")
    }
}

class payment {
    constructor(stratergy) {
        this.stratergy = stratergy;
    }
    setStatergy(stratergy) {
        this.stratergy = stratergy;
    }
    pay() {
        this.stratergy.pay();
    }
}

const creditCard = new CreditCard();
const upi = new UPI();
const debitCard = new DebitCard()

const payment1 = new payment(creditCard);
payment1.pay(); // Credit card payment successful

payment1.setStatergy(upi);
payment1.pay(); // UPI payment successful

payment1.setStatergy(debitCard);
payment1.pay(); //Debit card payment successful

