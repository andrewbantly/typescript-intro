class Employee {
    id!: number;
    name!: string;
    address!: string;
}

let john = new Employee();

john.id = 1;
john.name = "John"
john.address = "Highway 101";

console.log(john)

class Friend {
    id: number;
    name: string;
    address: string;
    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    getNameWithAddress() : string {
        return this.name + " lives at " + this.address;
    }
}

let murphy = new Friend (2, "Murphy", "Dad's house")
console.log(murphy)

let murphyHome = murphy.getNameWithAddress();
console.log(murphyHome)