
        let DH = {
        ttDH : {
            maDH:"12345"
        } ,
    thongtinKH : {
            hoTen : "Nguyen Ba A" ,
            soDT : "012345678",
            trangThaiTV : false
        },
         danhSachSP : {
            cafe :{
                maSp:"1",
                tenSP:"Cafe",
                soLuong:"5",
                giaTien:36
            },
            matcha : {
                maSp:"1",
                tenSP:"Matcha",
                soLuong:"5",
                giaTien:36               
            },
            trasua : {
                maSp:"1",
                tenSP:"Matcha",
                soLuong:"5",
                giaTien:36               
            }
        },
            trangThaiDH : {
                trangThaiThanhToan : false
            },
             diaChiGiaoHang :{
                diaChi:"so 123, a,B"
            }
        }
        let sp1 =DH.danhSachSP.cafe.soLuong*DH.danhSachSP.cafe.giaTien;
        let sp2 =DH.danhSachSP.matcha.soLuong*DH.danhSachSP.matcha.giaTien;
        let sp3 =DH.danhSachSP.trasua.soLuong*DH.danhSachSP.trasua.giaTien;
        let tongTien = sp1+sp2+sp3;
        document.writeln("Thanh Tien: " + tongTien + "K");
        var myString = "Hello";
        document.writeln(myString.slice(1, 4));
        document.writeln(myString[1]);
        document.writeln(myString.replace("Hello", "Voai"));
        document.writeln(myString.toUpperCase());
        document.writeln(myString.includes('e'));
        document.writeln(myString.split(''));

        let danhSach = ["Nguyen Van A", "Pham Quang B", "Ho Huu C", "Le trung D"];
        document.writeln(danhSach[1].startsWith("Pham"));
        //chuyen chuoi ve so
        let so = "123";
        document.writeln(typeof(so));
        document.writeln(typeof(Number(so)));
        //chuyen chuoi ve so nguyen
        document.writeln(parseFloat(so));
        //chuyen chuoi ve so thuc
        document.writeln(parseInt(so));
        //kiem tra so
        document.writeln(isNaN(so));
        
        let toDay = new Date();
        document.writeln(toDay);






