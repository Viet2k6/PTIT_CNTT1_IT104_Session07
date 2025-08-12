"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`SĐT: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`Quy mô nhóm: ${this.teamSize}`);
    }
}
const manager = new Manager("Trần Đăng Việt", "Rikkei", "0123456789", 300);
manager.printInfo();
