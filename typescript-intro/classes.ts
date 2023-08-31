
import * as UserLogin from './interfaces';

// classes should be used for backend purposes not interfaces
// why create a class
// a class will be used to handle business logic in angular
// it segments the business logic

interface Address {
    street: string;
    city: string;
    state: string;
    zip: number;
}
class Employee implements UserLogin.Login {
    #id: number;     // the # is used to create a private class property    
    protected name: string;
    address: Address;

    static getEmployeeCount(): number{              // get be accessed with the class name...not the instance;
        return 50;
    }

    get empId(): number{                        // used to get and set private class properties
        return this.#id;
    }

    set empId(id: number){
        this.#id = id;
    }

    constructor(id: number, name: string, address: Address){
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    login(): UserLogin.User {
       return { name: "John", id: 1, email: ''}; 
    }

    getNameWithAddress() : string {
        return `${this.name} lives at ${this.address}`;
    }
}

console.log(Employee.getEmployeeCount())

let john = new Employee(1, "John", {street: "ABC", city: "Bangalore", state: "Ohio", zip: 54321});

john.empId = 100;
console.log(john.empId);
console.log(john.getNameWithAddress());


class Manager extends Employee {
    constructor(id: number, name: string, address: Address){
        super(id, name, address);
    }
    getNameWithAddress() : string {
        return `${this.name} is a manager at ${this.address.city}, ${this.address.state}.`;
    }
}

let mike = new Manager(2, "Mike", {street:"Cherise Drive", city:"Styx", state:"Ohio", zip: 65434});

console.log(mike.getNameWithAddress());
console.log(john.login())