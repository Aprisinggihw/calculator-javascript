function display(value){
    document.getElementById("count").value += value;
}
function hapus(value){
    document.getElementById("count").value -= value;
}
function hasil(){
    let nilai = document.getElementById("count").value;
    let hasil = eval(nilai);
    document.getElementById("count").value = hasil;
}
function reset(){
    document.getElementById("count").value = "";

}
function darkMode(){
    let body = document.body;
    let btn = document.getElementById("btn-count");
    let btnOperator = document.querySelector("button .operator");
    body.classList.toggle("darkBody");
    btn.List.toggle("darkBtnCount");

    btnOperator.classList.toggle("darkBtnOperator");
}