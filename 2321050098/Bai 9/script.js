let arr = [1, 2, 3, 4, 5];

//do dai cua mang
document.writeln(arr.length);
//doc phan tu trong mang o vi tri so 3
document.writeln(arr[3]);
//timtrong mang co ki tu day khong va nam o vi tri bao nhieu
document.writeln(arr.indexOf(6));
//ktra xem co phai mang hay khong
document.writeln(Array.isArray(arr));

let a, b, c, d,e, f;
a = [1, 2, 3];
b = "JavaScript";
c = [42, "VBScript"];
d = [3, 6, 36];
//noi 2 mang b, c voi a
a = a.concat(b, c);
document.writeln(a);
//them "-" vao a
document.writeln(a.join("-"));
//lay ra phan tu cuoi
e =  d.pop();
document.writeln(e);
//day phan tu
d.push("QN");
document.writeln(d);
//dao phan tu trong mang
document.writeln(d.reverse());
//push(): Thêm phần tử vào cuối mảng arr.push(6)
//pop(): Xóa phần tử cuối cùng arr.pop()
//shift(): Xóa phần tử đầu tiên arr.shift()
//unshift(): Thêm phần tử vào đầu mảng arr.unshift(0)
//trỏ đến vị trí xong gán
a[3]=4;
document.writeln(a);

// IF-ElSE
let toDay =new Date();
// let now = toDay.getHours;
if (toDay.getHours()<=10){
    document.writeln("Chao Buoi Sang")
}
else if (toDay.getHours()>10 && toDay.getHours()<=12){
    document.writeln("Chao Buoi Trua")
}
else if (toDay.getHours()>12 && toDay.getHours()<=17){
    document.writeln("Chao Buoi Chieu")
}
else if (toDay.getHours()>17 && toDay.getHours()<=22){
    document.writeln("Chao Buoi Toi")
}
else if (toDay.getHours()>22 && toDay.getHours()<=24){
    document.writeln("Chao Buoi Dem")
}

let so = 100000000000000000001n;
if (so % 2n == 0n){
    document.writeln("So Chan");
}
else{
document.writeln("So Le")
}
