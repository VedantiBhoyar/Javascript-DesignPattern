// The decorator pattern is a structural design pattern that allows adding new functionality
//  to an existing object without modifying its structure.
// In JavaScript, it is often implemented using higher-order functions or class decorators.

function square(number) {
    return number * number;
}

function decoratorFunction(originalFunction) {
    return function (num) {
        const response = originalFunction(num);
        return `The square of provided number is ${response}`;
    }

}
const squareDecorator = decoratorFunction(square);
console.log(squareDecorator(5));
console.log(square(5))


// This is second way to achieve this 

// class Coffee{
//     cost(){
//         return 40;
//     }
// }
// class MilkDecorator{
//     constructor(Coffee){
//         this.Coffee=Coffee;
//     }
//     cost(){
//         return this.Coffee.cost()+10;
//     }
// }

// const coffee=new Coffee();
// console.log(coffee.cost());

// const milkDecorator=new MilkDecorator(coffee);
// console.log(milkDecorator.cost());
