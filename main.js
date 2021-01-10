function $$(id) {
    return document.getElementById(id);
}
// 1.Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
$$("btnTimSo").addEventListener("click", function () {
    /**
     * Đầu vào
     */
    var total = 0;
    var n = 1;
    /**
     * Xử lý
     */
    while (total < 10000) {
        total = total + n;
        n++;
    }
    /**
     * Đầu ra
     */
    $$("thongBao1").innerHTML = "Tổng là: " + total + "<br/>" + "N là: " + n;
})



// 2.Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)



$$("tinhXN").addEventListener("click", function () {
    /**
     * Đầu vào
     */
    var N = $$("soN").value;
    var X = $$("soX").value;
    var s = 0;
    /**
     * Xử Lý
     */
    for (var i = 1; i <= N; i++) {
        s = s + Math.pow(X, i);
    }


    /**
     * Đầu ra
     */

    $$("thongBao2").innerHTML = "Tổng của phương trình là: " + s;
})


// Tính giai thừa


$$("btnGiaiThua").addEventListener("click", function () {
    /**
     * Đầu vào
     */
    var giaiThuaN = $$("giaiThuaN").value;
    var tich = 1;
    /**
     * Xử lý
     */
    for (var i = 1; i <= giaiThuaN; i++) {
        tich = tich * i;
    }
    /**
     * Đầu ra
     */
    $$("thongBao3").innerHTML = "Giai thừ của " + giaiThuaN + " là: " + tich;
})


// Thẻ div chẳn lẻ
$$("btnTaoDIV").addEventListener("click", function () {
    /**
     * Xử lý
     */
    for (var i = 1; i < 11; i++) {
        var tagDiv = document.createElement("div");
        document.getElementById("taotheDIV").appendChild(tagDiv);
        tagDiv.innerHTML = "Đây là thẻ div";
        tagDiv.style.fontSize = "100px";
        tagDiv.style.textAlign = "center";
        tagDiv.style.color = "white";
        if (i % 2 === 0) {
            tagDiv.style.backgroundColor = "red";
        } else {
            tagDiv.style.backgroundColor = "blue";
        }
    }

})