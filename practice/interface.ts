//  Type Aliases

type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
};

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const newCar: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(newCar);



//                        Interfaces



// Interfaces are similar to type aliases, except they only apply to object types

interface Rectangle {
    height:number,
    width:number
};
const rect:Rectangle={
    height:20,
    width:30
}

const rec2:Rectangle={
    height:40,
    width:50
}

//            Extending Interfaces
 // Extanding an interface means you are creating a new
 // interface with the same properties as the original, 
 //plus something new;

 interface ColorRectangle extends Rectangle {
    color:string;
 }

 const coloredRectangle:ColorRectangle={
    height:20,
    width:30,
    color:"blue"
 }


 // Define an interface

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    
    // Optional property
    email?: string;
    
    // Method signature
    greet(): string;
}

// Implement the interface
const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
};


const person1:Person={
    firstName:"Akhilesh",
    lastName:"Yadav",
    age:27,
    email:"akileshyadav310596@gmail.com",
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`
    }
}

console.log(person1.greet())

console.log(person.greet()); 

interface Employee {
    employeeId: number;
    position: string;
}

interface DetailedPerson extends Person, Employee {
    department: string;
}

const detailedPerson: DetailedPerson = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
    email: "alice@example.com",
    employeeId: 123,
    position: "Developer",
    department: "Engineering",
    greet() {
        return `Hello, I'm ${this.firstName} ${this.lastName}.`;
    }
};
console.log(detailedPerson)
