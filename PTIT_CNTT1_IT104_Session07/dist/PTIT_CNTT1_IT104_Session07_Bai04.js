"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Sinh viên: ${this.name}, ID: ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Giáo viên: ${this.name}, Môn học: ${this.subject}`);
    }
}
const student = new Student("Trần Đăng Việt", 1);
const teacher = new Teacher("Trần Quang A", "Toán");
student.displayInfo();
teacher.displayInfo();
