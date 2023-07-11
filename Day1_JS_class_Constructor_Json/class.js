class Vechile {

    constructor(model, tyre){
        this.model = model;
        this.tyre = tyre;
    }

    start(){
        console.log(`${this.model} is starting.`);
    }
    
    findTyre(){
        console.log(`${this.model} has ${this.tyre} tyre.`);
    }
    
}

const obj1 = new Vechile("sedan", 4);
const Vechile2 = new Vechile("SUV",4);

obj1.start();
obj1.findTyre();
Vechile2.start();
Vechile2.findTyre();
console.log(obj1);

const jsonEx = '{"name" : "Raghu Raam","Age" : 52}'

const jsonParse = JSON.parse(jsonEx);
console.log(jsonParse);

const backToString = JSON.stringify(jsonParse);
console.log(backToString);