class Lux {
    constructor(quantity) {
        this.quantity = quantity;
    }
    getProductDetail() {
        const price = this.quantity * 25;
        console.log(`Hello you selected ${this.quantity} LUX soap which has price  ${price}`)
    }

}
class Dettol {
    constructor(quantity) {
        this.quantity = quantity;
    }
    getProductDetail() {
        const price = this.quantity * 15;
        console.log(`Hello you selected ${this.quantity} Dettol soap which has price ${price} `)
    }

}
class Moti {
    constructor(quantity) {
        this.quantity = quantity;
    }
    getProductDetail() {
        const price = this.quantity * 45;
        console.log(`Hello you selected ${this.quantity} Moti soap which has price ${price} `)
    }

}
class Factory {
    static createSoap(type, quantity) {
        if (type == 'LUX') {
            return new Lux(quantity);
        }
        else if (type == 'DETTOL') {
            return new Dettol(quantity);
        }
        else if (type == 'MOTI') {
            return new Moti(quantity);
        }
        else {
            throw new Error("This type of soap cannot be manufactured")
        }
    }

}

Factory.createSoap('LUX', 10).getProductDetail();
Factory.createSoap('DETTOL', 12).getProductDetail();
Factory.createSoap('MOTI', 14).getProductDetail();
