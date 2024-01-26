import Car,{printCost,printName} from './script.js'

const car = new Car("Benz");

car.setCost(100);
printName(car);
printCost(car);

car.name = "Ferrari";
printName(car);
printCost(car);
