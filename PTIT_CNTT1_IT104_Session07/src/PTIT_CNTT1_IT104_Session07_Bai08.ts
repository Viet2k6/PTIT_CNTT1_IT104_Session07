class Account4 {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;
    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.history = [];
        this.status = "active";
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Đã nạp ${amount} đồng. Số dư hiện tại là ${this.balance} đồng.`);
        } else {
            this.history.push(`Nạp thất bại với số tiền ${amount} đồng.`);
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Đã rút ${amount} đồng. Số dư còn lại là ${this.balance} đồng.`);
        } else {
            this.history.push(`Rút tiền thất bại với số tiền ${amount} đồng.`);
        }
    }

    showHistory(): void {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        for (const record of this.history) {
            console.log(record);
        }
    }
}

class SavingAccount1 extends Account4 {
    public interestRate: number;

    constructor(accountNumber: string, interestRate: number) {
        super(accountNumber);
        this.interestRate = interestRate;
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Đã rút ${amount} đồng từ tài khoản tiết kiệm. Số dư còn lại là ${this.balance} đồng.`);
        } else {
            this.history.push(`Rút thất bại từ tài khoản tiết kiệm với số tiền ${amount} đồng.`);
        }
    }
}

class CheckingAccount extends Account4 {
    public overdraftLimit: number;
    constructor(accountNumber: string, overdraftLimit: number) {
        super(accountNumber);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Đã rút ${amount} đồng từ tài khoản thanh toán. Số dư hiện tại là ${this.balance} đồng.`);
        } else {
            this.history.push(`Rút thất bại từ tài khoản thanh toán với số tiền ${amount} đồng.`);
        }
    }
}


const acc5 = new SavingAccount1("001", 0.05);
acc5.deposit(1000);
acc5.withdraw(300);
acc5.withdraw(800);
acc5.withdraw(700);
acc5.showHistory();

const acc6 = new CheckingAccount("002", 500);
acc6.deposit(1000);
acc6.withdraw(1200);
acc6.withdraw(400);
acc6.showHistory();
