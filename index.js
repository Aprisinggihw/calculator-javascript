function display(value) {
    if (value=="%") {
        document.getElementById("count").value *= 0.01;
    }else{
        document.getElementById("count").value += value;
    }
}
function hapus() {
    document.getElementById("count").value =  (document.getElementById("count").value).slice(0,-1);
}
function hasil() {
    let nilai = document.getElementById("count").value;
    let hasil = eval(nilai);
    document.getElementById("count").value = hasil;
}
function reset() {
    document.getElementById("count").value = "";

}
