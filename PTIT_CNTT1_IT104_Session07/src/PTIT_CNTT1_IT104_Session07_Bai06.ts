class Account1 {
    id: number;
    userName: string;
    password: string;
    isLogin: boolean;
    role: string;
    constructor(id: number, userName: string, password: string, role: string = "user") {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(): void {
        this.isLogin = true;
        console.log("Đăng nhập thành công");
    }
    logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}

class userAcc1 extends Account1 {
    status: string;
    constructor(id: number, userName: string, password: string) {
        super(id, userName, password, "user");
        this.status = "active";
    }

    login(): void {
        if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa`);
            this.isLogin = false;
        } else {
            super.login();
        }
    }
}

class adminAcc extends Account1 {
    private userList: userAcc1[] = [];
    constructor(id: number, userName: string, password: string) {
        super(id, userName, password, "admin");
    }
    addUser(user: userAcc1): void {
        this.userList.push(user);
    }
    banUser(id: number): void {
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].id == id) {
                this.userList[i].status = "banned";
                console.log(`Người dùng ${this.userList[i].userName} đã bị khóa`);
                break;
            }
        }
    }
}

const acc3 = new userAcc1(3, "linh789", "789123");
const acc4 = new userAcc1(4, "thanh456", "456321");
const admin = new adminAcc(99, "admin01", "adminpass");
admin.addUser(acc3);
admin.addUser(acc4);
acc3.login();
acc3.logout();
acc4.login();
admin.banUser(4);
acc4.login();
