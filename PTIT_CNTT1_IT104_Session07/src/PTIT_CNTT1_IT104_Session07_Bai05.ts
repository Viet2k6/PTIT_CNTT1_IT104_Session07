class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;
    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    login(): void {
        console.log(`Đăng nhập thành công`);
        this.isLogin = true;
    }
    logout(): void {
        if (this.isLogin) {
            console.log("Đăng xuất thành công.");
            this.isLogin = false;
        }
    }
}

class userAcc extends Account {
    public status: string;
    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(): void {
        if (this.status == "active") {
            this.isLogin = true;
            console.log(`Đăng nhập thành công`);
        } else {
            console.log(`Tài khoản đã bị khóa.`);
        }
    }
}

const acc1 = new userAcc(1, "viet123", "123456", "user", "active");
const acc2 = new userAcc(2, "thanh456", "567890", "user", "banned");
acc1.login();   
acc1.logout(); 
acc2.login();  
acc2.logout();  
