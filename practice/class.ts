class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  let person2 = new Person("Jane");
  console.log(person2.getName()); // person.name isn't accessible from outside the class since it's private