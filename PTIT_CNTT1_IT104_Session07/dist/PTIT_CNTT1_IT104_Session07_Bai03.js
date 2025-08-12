"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Con vật: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
const cat = new Cat("Mèo");
const dog = new Dog("Chó");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();
