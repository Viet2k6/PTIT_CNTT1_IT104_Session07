"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed = Math.max(0, this.speed - amount);
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`${this.name} (ID: ${this.id}) đang chạy với tốc độ: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        this.showSpeed();
        console.log(`Số bánh răng: ${this.gear}`);
    }
}
const bike = new Bicycle("Xe đạp thể thao", 15, 10, 6);
bike.showInfo();
bike.speedUp(5);
bike.slowDown(3);
bike.showInfo();
