abstract class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    printName(): void {
        console.log(`Con vật: ${this.name}`);
    }
}

class Cat extends Animal {
    makeNoise(): void {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise(): void {
        console.log("gâu gâu");
    }
}

const cat = new Cat("Mèo");
const dog = new Dog("Chó");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();
