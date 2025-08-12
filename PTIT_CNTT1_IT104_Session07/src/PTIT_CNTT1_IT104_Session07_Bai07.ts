class Account3 {
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

class SavingAccount extends Account3 {
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

const acc = new SavingAccount("001", 0.05);
acc.deposit(1000);
acc.withdraw(300);
acc.withdraw(800);
acc.withdraw(700);
acc.showHistory();
