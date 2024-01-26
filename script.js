// y=null;
// let x;
// console.log(`${f(x)}`);   
// console.log(`${f("Helo")}`); 
// const a = (x) => {
//     return x;
// }
// console.log(`${a(y)}`);   

// function f(x){
//     return x;
//     // return x+10;
// }

// // console.log(x);
// var y;
// console.log(y==x,x===y,"cool");
let x = 5;
class Car{
    constructor(name){
        this.name = name;
    }
    setCost(cost) {
        this.cost = cost;
    }
}

function printCost(car){
    console.log("Cost of Car: "+car.cost);
}

function printName(car){
    console.log("Name of Car: "+car.name);
}

export default Car;
export {printCost,printName}