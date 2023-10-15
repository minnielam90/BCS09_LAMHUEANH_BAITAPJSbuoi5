// Bài 1: Quản lý tuyển sinh
// Đầu vào: khai báo các biến
// - diemChuan, diemMon1, diemMon2, diemMon3, khuVuc, doiTuong
// - x = diem 0
// - ketQua
// Các bước xử lý:
// - nếu diemMon1 hoặc diemMon2 hoặc diemMon3 <= 0 ==> Bạn rớt
// - ketQua = diemMon1 + diemMon2 + diemMon3 + (khuVuc + doiTuong)
// đầu ra: ketQua >= diemChuan ==> đậu
// ketQua < diemChuan ==> rớt
var btnResult = document.getElementById("btnResult");
btnResult.onclick = function manageAdmission() {
  var diemChuan = document.getElementById("inputScore").value,
    diemMon1 = document.getElementById("inputScore1").value * 1,
    diemMon2 = document.getElementById("inputScore2").value * 1,
    diemMon3 = document.getElementById("inputScore3").value * 1,
    khuVuc = document.getElementById("selLocation").value * 1,
    doiTuong = document.getElementById("selUser").value * 1,
    x = !0;
  if (
    (x &= checkScore(diemMon1) && checkScore(diemMon2) && checkScore(diemMon3))
  ) {
    var ketQua = diemMon1 + diemMon2 + diemMon3 + (khuVuc + doiTuong);
    document.getElementById("txtResult").innerHTML =
      ketQua >= diemChuan
        ? `Bạn đã đậu. Tổng điểm: ` + ketQua
        : `Bạn đã rớt. Tổng điểm: ` + ketQua;
  } else
    document.getElementById(
      "txtResult"
    ).innerHTML = `Bạn đã rớt do có điểm nhỏ hơn hoặc bằng 0`;
};
function checkScore(diemChuan) {
  return !(diemChuan <= 0);
}

// Bài 1 end

// Bài 2: Tính tiền điện
// Đầu vào: khai báo các biến và hằng số
// - hoTen, soKW, tienDien
// Hướng xử lý: xét điều kiện cho soKW và từ đó ghi ra công thức tính tienDien
// Đầu ra: nếu soKW <=0 : không hợp lệ
// trường hợp còn lại thì xuất ra họ tên và tiền điện
var btnElectric = document.getElementById("btnElectric");
btnElectric.onclick = function calcElectric() {
  const kw_1 = 500,
    kw_2 = 650,
    kw_3 = 850,
    kw_4 = 1100,
    kw_5 = 1300;
  var hoTen = document.getElementById("inputName").value,
    soKW = document.getElementById("inputKW").value * 1,
    tienDien = 0;
  0 < soKW && soKW <= 50
    ? (tienDien = soKW * kw_1)
    : soKW > 50 && soKW <= 100
    ? (tienDien = 50 * kw_1 + (soKW - 50) * kw_2)
    : soKW > 100 && soKW <= 200
    ? (tienDien = 50 * kw_1 + 50 * kw_2 + (soKW - 100) * kw_3)
    : soKW > 200 && soKW <= 350
    ? (tienDien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (soKW - 200) * kw_4)
    : soKW > 350
    ? (tienDien =
        50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (soKW - 350) * kw_5)
    : alert("Số kw không hợp lệ. Vui lòng nhập lại"),
    (document.getElementById("txtElectric").innerHTML =
      `Họ tên :  ` +
      hoTen +
      `  ; Tiền điện :   ${tienDien.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      })}`);
};
// Bài 2 end

// Bài 3: Tính thuế thu nhập cá nhân
var btnTax = document.getElementById("btnTax");
btnTax.onclick = function calcTax() {
  var hoTenThue = document.getElementById("inputName1").value,
    thuNhap = document.getElementById("inputSalary").value * 1,
    phuThuoc = document.getElementById("inputDependent").value * 1,
    thuNhapThue = thuNhap - 4e6 - phuThuoc * 16e5,
    tienThue = 0;
  thuNhapThue > 0 && thuNhapThue <= 6e7
    ? (tienThue = 0.05 * thuNhapThue)
    : thuNhapThue > 6e7 && thuNhapThue <= 12e7
    ? (tienThue = 0.1 * thuNhapThue)
    : thuNhapThue > 12e7 && thuNhapThue <= 21e7
    ? (tienThue = 0.15 * thuNhapThue)
    : thuNhapThue > 21e7 && thuNhapThue <= 384e6
    ? (tienThue = 0.2 * thuNhapThue)
    : thuNhapThue > 384e6 && thuNhapThue <= 624e6
    ? (tienThue = 0.25 * thuNhapThue)
    : thuNhapThue > 624e6 && thuNhapThue <= 96e7
    ? (tienThue = 0.3 * thuNhapThue)
    : thuNhapThue > 96e7
    ? (tienThue = 0.35 * thuNhapThue)
    : alert("Số tiền thu nhập không hợp lệ. Vui lòng nhập lại"),
    (document.getElementById("txtTax").innerHTML =
      `Họ tên :  ` +
      hoTenThue +
      `  ; Tiền thuế thu nhập cá nhân :   ${tienThue.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      })}`);
};
// Bài 3 end

// Bài 4: Tính tiền cáp
function disableInput() {
  var loaiKH = document.getElementById("selCustomer").value;
  document.getElementById("inputConnect").style.display =
    "company" == loaiKH ? "block" : "none";
}

var btnNet = document.getElementById("btnNet");
btnNet.onclick = function calcNet() {
  var loaiKH = document.getElementById("selCustomer").value,
    maKH = document.getElementById("inputCusID").value,
    soKenh = document.getElementById("inputChannel").value,
    soKetNoi = document.getElementById("inputConnect").value,
    tienCap = 0;
  "company" == loaiKH
    ? (tienCap = tinhTong(15, 75, 50, soKenh, soKetNoi, 5))
    : "user" == loaiKH
    ? (tienCap = tinhTong(4.5, 20.5, 7.5, soKenh, 0, 0))
    : alert("Hãy chọn loại khách hàng"),
    (document.getElementById("txtNet").innerHTML =
      `Mã khách hàng : ` +
      maKH +
      ` ;  Tiền cáp : ` +
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(tienCap));
};

function tinhTong(loaiKH, maKH, soKenh, soKetNoi, tienCap, l) {
  var m = loaiKH + maKH + soKenh * soKetNoi;
  return tienCap > 10 && (m += (tienCap - 10) * l), m;
}

// document.onkeydown = function (loaiKH) {
//   return (
//     123 != (loaiKH = loaiKH || window.event).keyCode &&
//     (!loaiKH.ctrlKey || !loaiKH.shiftKey || 73 != loaiKH.keyCode) &&
//     void 0
//   );
// };

// Bài 4 end
