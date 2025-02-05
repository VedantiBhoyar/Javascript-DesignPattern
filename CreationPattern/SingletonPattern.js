class Singleton {
    static instance = null;
    constructor() {
        if (Singleton.instance) {
            throw new Error("This is singleton class you cannot create two instance,Use getInstance()");
        }
        Singleton.instance = this;
        console.log("Instance created");
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        console.log("Instance returned");
        return Singleton.instance;
    }
}
const person1 = new Singleton();
const person2 = Singleton.getInstance();
console.log(person1 == person2) // true
