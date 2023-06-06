"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Friend_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
}
let john = new Employee();
john.id = 1;
john.name = "John";
john.address = "Highway 101";
console.log(john);
class Friend {
    constructor(id, name, address) {
        // adding a # before the property will make it a private property - it won't be read
        _Friend_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Friend_id, id, "f");
        this.name = name;
    }
    getNameWithAddress() {
        return this.name + " lives at " + this.address;
    }
    get friendId() {
        return __classPrivateFieldGet(this, _Friend_id, "f");
    }
    set friendId(id) {
        __classPrivateFieldSet(this, _Friend_id, id, "f");
    }
    static getFriendCount() {
        return 10;
    }
    login() {
        return { name: "Murphy", age: 2, id: 4 };
    }
}
_Friend_id = new WeakMap();
let murphy = new Friend(2, "Murphy", "Dad's house");
console.log(murphy);
let murphyHome = murphy.getNameWithAddress();
console.log(murphyHome);
class Family extends Friend {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is family who lives at ${this.address}.`;
    }
}
let kate = new Family(3, "Kate", "Andrew and Murphy's house");
kate.friendId = 100;
console.log(kate.friendId);
console.log(kate.getNameWithAddress());
console.log(`friends: ${Friend.getFriendCount()}`);
