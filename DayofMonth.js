function input(){
    let month = parseInt(document.getElementById("thang").value);
    let kq;
    if (month <=0 || month >12){
        alert ("Mời bạn nhập lại");
        location.reload();
        return;
    }
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            kq = "Tháng " + month + " có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            kq = "Tháng " + month + " có 30 ngày";
            break;
        default:
            kq = "Tháng " + month + " có 28 hoặc 29 ngày";
    }
    document.getElementById("ketqua").innerHTML=kq;
}