import { Login, User } from "./interface";

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

class Friend implements Login {
    // adding a # before the property will make it a private property - it won't be read
    #id: number;
    // protected implies that the method or property is accessible only internally within the class or any class that extends it but not externally.
    protected name: string;
    address: string;
    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }
    getNameWithAddress(): string {
        return this.name + " lives at " + this.address;
    }

    get friendId(): number {
        return this.#id;
    }
    set friendId(id : number) {
        this.#id = id;
    }

    static getFriendCount(): number {
        return 10;
    }
    login(): User {
        return { name: "Murphy", age: 2, id: 4}
    }
}

let murphy = new Friend(2, "Murphy", "Dad's house")
console.log(murphy)

let murphyHome = murphy.getNameWithAddress();
console.log(murphyHome)

class Family extends Friend {
    constructor(id: number, name: string, address: string) {
        super(id, name, address)
    }
    getNameWithAddress(): string {
        return `${this.name} is family who lives at ${this.address}.`;
    }
}

let kate = new Family(3, "Kate", "Andrew and Murphy's house")
kate.friendId = 100;
console.log(kate.friendId)

console.log(kate.getNameWithAddress());
console.log(`friends: ${Friend.getFriendCount()}`)
