function verify() {
    console.log("a, b, c")
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    let c = parseInt(elementC.innerText);
    console.log(a, b, c)

    let low, high

    if (a < c) {
        low = a;
        high = c;
        if (b > low && b < high) {
        result = "Выполняется неравенство A<B<C"
        document.getElementById("result").innerText =  result;}

        if (b>high || b<low){
         result = "Не выполняется ни одно из неравенств"
        document.getElementById("result").innerText =  result;}
    }

    if  (a > c){
        low = c;
        high = a;
        if (b > low && b < high) {
        result = "Выполняется неравенство A>B>C"
        document.getElementById("result").innerText =  result;}
        if (b>high || b<low){
         result = "Не выполняется ни одно из неравенств"
        document.getElementById("result").innerText =  result;}
    }
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);