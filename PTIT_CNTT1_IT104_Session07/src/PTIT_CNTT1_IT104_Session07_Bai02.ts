class Vehicle{
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
    }
    speedUp(amount: number): void {
        this.speed += amount;
    }
    showSpeed(): void {
        console.log(`${this.name} (ID: ${this.id}) đang chạy với tốc độ: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo(): void {
        this.showSpeed();
        console.log(`Số bánh răng: ${this.gear}`);
    }
}
const bike = new Bicycle("Xe đạp thể thao", 15, 10, 6);

bike.showInfo();
bike.speedUp(5);
bike.slowDown(3);
bike.showInfo();
