"use strict";
class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    login() {
        console.log(`Đăng nhập thành công`);
        this.isLogin = true;
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công.");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status == "active") {
            this.isLogin = true;
            console.log(`Đăng nhập thành công`);
        }
        else {
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
