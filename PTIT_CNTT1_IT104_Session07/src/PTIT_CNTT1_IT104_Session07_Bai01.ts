class Employee {
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`SĐT: ${this.phone}`);
    }
}

class Manager extends Employee {
    public teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Quy mô nhóm: ${this.teamSize}`);
    }
}

const manager = new Manager("Trần Đăng Việt", "Rikkei", "0123456789", 300);
manager.printInfo();

