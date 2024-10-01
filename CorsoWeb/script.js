window.onload = gestoreLoad;

function gestoreLoad(){

    let btnSomma = document.getElementById("btnSomma");
    btnSomma.onclick = somma;

    let btnSott = document.getElementById("btnSott");
    btnSott.onclick = sottrai;

    let nodo = document.getElementById("result");

    function somma(){

        let n1 = parseFloat(document.getElementById("n1").value);
        let n2 = parseFloat(document.getElementById("n2").value);

        nodo.textContent = (n1 + n2);


    }
    function sottrai(){

let n1 = parseFloat(document.getElementById("n1").value);
let n2 = parseFloat(document.getElementById("n2").value);

nodo.textContent = (n1 - n2)



}
}
