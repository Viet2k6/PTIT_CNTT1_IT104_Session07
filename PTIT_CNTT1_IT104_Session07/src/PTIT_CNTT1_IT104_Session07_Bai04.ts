abstract class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract displayInfo(): void;
}

class Student extends Person {
    private id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Sinh viên: ${this.name}, ID: ${this.id}`);
    }
}

class Teacher extends Person {
    private subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Giáo viên: ${this.name}, Môn học: ${this.subject}`);
    }
}

const student = new Student("Trần Đăng Việt", 1);
const teacher = new Teacher("Trần Quang A", "Toán");
student.displayInfo();
teacher.displayInfo();

