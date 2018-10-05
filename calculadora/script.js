
/*var a = parseInt(prompt('digite um numero: '));

for(var b=0 ;b<=a ; b++){
 alert (b*2);
}  */

/*var a= 2;

for(a=0; a <=10 ; a++){
    alert( a*2);
}
*/

var a = parseInt(prompt('digite um numero '));
var b=parseInt(prompt('Digite outro numero '));
var opcao = prompt("Digite a opção desejada: \nA - Soma entre os numeros \nB -multiplicação").toUpperCase();

switch(opcao){
    case "A":
    alert(soma(a, b));
    break;

    case "B":
    alert(mult(a, b));
    break;
}
function soma(a,b){
    return a+b;
}
function mult(a,b){
    return a*b;
}