// let r = confirm("Press a button!");
// document.writeln(r);
// if ( r == true) {
//     document.writeln("Press OK! <br>");
// }
// else {
//     document.writeln("Press Cancel! <br>");
// }

// let r2 = prompt("sometext")

// let toDay = new Date();
// //Chu Nhat : 0
// let theDay = toDay.getDay();//Thu 4 : 3
// switch(theDay){
//         //Kiem tra phai thu 6 hay khong
//     case 5:
//         document.writeln("Finally Friday!");
//             break;
//     case 6:
//         document.writeln("Super Saturday!");
//             break;
//     case 0:
//         document.writeln("Sleepy Sunday!");
//             break;
//     default:
//         document.writeln("I'm looking forword to this weekend!");        
// }

// let arrNum = [0, 1, 2, 3, 4, 5];
// for (let i = 1; i <= 1000; i++) {
//     document.writeln(i+"Anh Xin Loi! <br>");   
// }

// document.writeln(arrNum.length)

// for (let j = 0; j < arrNum.length; j++) {
//     document.writeln(arrNum[j] + "<br>")
// }


// let danhSach = ["Lương Ngọc	Bích ", "Dương Gia Bình ", "Nguyễn Như Thành	Danh ", "Hoàng Xuân	Duẩn ", "Hà Văn	Dũng"];
// for (let t = 0 ; t < danhSach.length; t++) {
//     document.writeln("Xin chao ban " + danhSach[t] + "!<br>");
    
// }

// let i = 0;
// while (i <= 10)
// {
//     document.writeln("The Number Is " + i + "<br>");
//     i = i+1;
// }

// function + ten ham +(){
//     code logic
// }

//Hàm Khong Tham Số
// let name = "Chị YNhi";
// function sayHello(){
//     document.writeln("Hello " + name); // Biến toàn cục
// }
// sayHello();
//  // Biến cục bộ
// function sayHello(){
//     let name2 = "Chị YNhi";
//     document.writeln("Hello " + name);
// }
// sayHello();

// Có Tham Số
// function sayHello2(name, age){
//     document.writeln("Hello " + name + " " + age + " tuổi");

// }
// let nameP =  prompt("Tên", "Điền Tên");
// let ageP =  prompt("Tuổi", "Điền Tuổi");

// sayHello2(nameP, ageP);

//kiểm tra chẵn lẻ
//kết hợp prompt
let so = prompt("So", "Nhap So");
so = parseFloat(so);
function check(so){
if (so % 2n == 0n){
    document.write("So Chan");
}
else{
    document.write("So Le");
}
so();
}
if (!isNaN(so)){
    check(so);
}