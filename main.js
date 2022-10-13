/**
 * bai 1:
 *  dau vao:
 *          + luong nhan vien
 *          + so ngay lam
 *  xu ly:
 *          + tao bien days, salary
 *          + chuyen tu string => number
 *          + result1 = days * salary
 *  dau ra:
 *          + ket qua hien thi
 */

var clickResult1 = document.getElementById("clickResult1");

clickResult1.onclick = function () {
    var days = document.getElementById("days").value;
    var salary = document.getElementById("salary").value;

    days = parseInt(days);
    salary = parseInt(salary);

    var result1 = days * salary;

    var sum1 = document.getElementById("sum1");

    sum1.value = result1;

}

/**
 * bai 2
 *  dau vao:
 *          + 5 so nguyen
 *  xu ly:
 *          + tao bien num1, num2, num3, num4, num5
 *          + chuyen string => number
 *          + result = (num1 + num2 + num3 + num4 + num5) / 5
 *  dau ra:
 *          + ket qua hien thi
 */

var clickResult2 = document.getElementById("clickResult2");

clickResult2.onclick = function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    num4 = parseInt(num4);
    num5 = parseInt(num5);

    var result2 = (num1 + num2 + num3 + num4 + num5) / 5;

    var sum2 = document.getElementById("sum2");

    sum2.value = result2;

}

/**
 * bai 3
 *  dau vao:
 *          + so tien quy doi
 *  xu ly:
 *          + tao bien usd
 *          + tao bien vnd = 23500
 *          + result3 = usd * vnd
 *  dau ra: 
 *          + ket qua hien thi
 */

var clickResult3 = document.getElementById("clickResult3");

clickResult3.onclick = function () {
    var USD = document.getElementById("usd").value;
    const VND = 23500;

    var result3 = USD * VND;

    var sum3 = document.getElementById("sum3");

    sum3.value = result3;

}

/**
 * bai 4
 *  dau vao:
 *          + chieu dai
 *          + chieu rong
 *  xu ly:
 *          + tao bien chieuDai, chieuRong
 *          + chuyen string => number
 *          + chuVi = (chieuDai + chieuRong) * 2
 *          + dienTich = chieuDai * chieuRong
 *  dau ra:
 *          + ket qua hien thi
 */

var clickResult41 = document.getElementById("clickResult41");

clickResult41.onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    chieuDai = parseInt(chieuDai);
    chieuRong = parseInt(chieuRong);

    var chuvi = (chieuDai + chieuRong) * 2;

    var chuVi = document.getElementById("chuVi");

    chuVi.value = chuvi;

}

var clickResult42 = document.getElementById("clickResult42");

clickResult42.onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    chieuDai = parseInt(chieuDai);
    chieuRong = parseInt(chieuRong);

    var dientich = chieuDai * chieuRong;

    var dienTich = document.getElementById("dienTich");

    dienTich.value = dientich;

}

/**
 * bai 5
 *  dau vao: 
 *          + so co 2 chu so
 *  xu ly:
 *          + tao bien so co 2 chu so
 *          + chuyen string => number
 *          + tao bien ten = Math.floor(so co 2 chu so / 10)
 *          + tao bien unit = so co 2 chu so % 10;
 *          + result5 = ten + unit
 *  dau ra:     
 *          + ket qua hien thi
 */

var clickResult5 = document.getElementById("clickResult5");

clickResult5.onclick = function () {
    var number = document.getElementById("number").value;

    number = parseInt(number);

    const TEN = Math.floor(number / 10);
    const INIT = number % 10;

    var result5 = TEN + INIT;

    var sum5 = document.getElementById("sum5");

    sum5.value = result5;
}