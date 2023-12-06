let firstName="Akhilesh";
firstName="Raj";

let lastName:string="Yadav";
lastName="Kumar"
console.log(`${firstName} ${lastName}`)


// any is a type that disables type checking and effectively allows all types to be used.

//  it should be avoided at "any" cost... 

let u:any = true;
u = "Akhi";
Math.round(u)

// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
// never effectively throws an error whenever it is defined.


// Typescript array

let nam: string[] = [];
nam.push ("akhilesh")
nam.push("Raj")
console.log(nam)

// Read Only

// The readonly keyword can prevent arrays from being changed.

const user: readonly string[]=["akhi","yadav"]
// user.push("akhi")
console.log(user[0]);



//         Type Inference

// TypeScript can infer the type of an array if it has values.

         //       TypeScript Tuples



//  A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:


let ourTuple: [number,string,boolean]

ourTuple = [123,"Akhilesh",true]

ourTuple.push("yadav")

console.log(ourTuple);


//           Readonly Tuple


// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial value


let newTuple:readonly [string, number, boolean]

newTuple=['Aky', 2345,false];

// newTuple.push("yadav") for readonly you can not perform any action




// useState returns a tuple of the value and a setter function.

// const [firstName, setFirstName] = useState('Dylan') is a common example.

// Because of the structure we know our first value in our list will be a certain value type in this case a string and the second value a function.

                            // Named Tuples

                            // Named tuples allow us to provide context for our values at each index.    
                            
                            const area: [a:number, b:number] = [23,34]


//                             Destructuring Tuples
// Since tuples are arrays we can also destructure them.

const graph:[number,number]=[23,45]

const [x,y]= graph

console.log(x,y)


                // Typescript Object Types

const car:{type:string,model:string,year:number}={
    type:"Maruti",
    model:"800",
    year:2020
                }

                const Car: { type: string, mileage?: number } = { // no error
                    type: "Toyota"
                  };
                Car.mileage = 2000;               