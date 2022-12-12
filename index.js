
// Bài tập 1: Tiền lương nhân viên
// dữ liệu:
// Lương 1 ngày : 100.000 
// số liệu người dùng cho là: 31 ngày
// B1: Tạo biến tiền lương, nhân viên số ngày làm,tổng tiền lương
// B2: Gán giá trị cho từng biến
let salary ="100.000";
console.log("salary =",salary);
let days ="31";
console.log("days =", days);
// B3: Gán phép tính vào biến tổng 
let sum = salary * days;
// Kết Quả : Tổng tiền lương nhân viên
console.log("Tổng =",sum);


// Bài tập 2: Tính trung bình 5 số thực
// dữ liệu: các số thực,
// B1: Tạo các biến x có số thực,biến trung bình
// B2: Gán giá trị cho bién
let x1 = 5;
console.log("x1 =", x1);
let x2 = 10;
console.log("x2 =", x2);
let x3 = 15;
console.log("x3 =", x3);
let x4 = 20;
console.log("x4 =", x4);
let x5 = 25;
console.log("x5 =", x5);
let total = x1 + x2 + x3 + x4 + x5 
console.log("Tổng cộng =",total);
// B3: Gán phép tính vào biến trung bình
let medium = Math.floor(total/5) ;
//Kết quả: Trung bình của 5 số thực
console.log("Trung bình =",medium);


//Bài tập 3: Quy đổi tiền
//Dữ liệu: tiền 1 usd bằng : 23.500vnd
//B1: Tạo biến usd,vnd
//B2: Gán giá trị usd,vnd

let usd = 10;
console.log("usd =", usd);
let vnd = 23.500;
console.log("vnd =", vnd);
//B3: Gán phép tính vào totalvnd
let totalvnd = Math.floor(usd*vnd);
//Kết quả: Số tổng tiền quy đổi vnd
console.log("Tổng tiền quy đổi vnd =", totalvnd);


//Bài tập 4:
//Dữ liệu: ta có AB,CD là chiều dài; AD, BC là chiều rộng
//B1: Tạo biến AB, BC, CD, AD
//B2: Gán giá trị cho từng biến
let AB = 15;
console.log("AB", AB);
let AD = 10;
console.log("AD", AD);
let BC = 10;
console.log("BC", BC);
let CD = 15;
console.log("CD", CD);
//B3: Gán phét tính cho CHU VI, DIỆN TÍCH
let area = AB * BC;
let perimeter =(AB + BC)*2;
//kết quả: TÍNH DIỆN TÍCH, CHU VI
console.log("CHU VI =", perimeter);
console.log("DIỆN TÍCH =",area);


//Bài tập 5:
//Dữ liệu: 1 biến có 2 chữ số,1 hàng đơn vị, 1 hàng chục
//B1:Tạo biến x
let x = 18;
console.log("x", x);
//B2:Gán phép tính vào x và totalx
let hangdonvi = x % 10
console.log("hang don vi =", hangdonvi);
let hangchuc = Math.floor(x/10);
console.log("hang chuc =", hangchuc);
//Kết quả: Tổng 2 biến cộng lại;
let totalx = hangchuc + hangdonvi;
console.log("Tổng x =", totalx);
