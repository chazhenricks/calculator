var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mult = document.getElementById("mult");
var div = document.getElementById("div");

var num1 = "";
var num2 = ""

var result = "";
var answerOnPage = document.getElementById("answer");

console.log(num1, num2);


function addition(){
    num1 = Number(document.getElementById("num-1").value);
    num2 = Number(document.getElementById("num-2").value);
    result = num1 + num2;
    console.log(result);
    answerOnPage.innerHTML = "<p>" + result + "</p>";

}
function subtraction(){
    num1 = Number(document.getElementById("num-1").value);
    num2 = Number(document.getElementById("num-2").value);
    result = num1 - num2;
    console.log(result);
    answerOnPage.innerHTML = "<p>" + result + "</p>";

}
function multiply(){
    num1 = Number(document.getElementById("num-1").value);
    num2 = Number(document.getElementById("num-2").value);
    result = num1 * num2;
    console.log(result);
    answerOnPage.innerHTML = "<p>" + result + "</p>";

}
function divide(){
    num1 = Number(document.getElementById("num-1").value);
    num2 = Number(document.getElementById("num-2").value);
    result = num1 / num2;
    console.log(result);
    answerOnPage.innerHTML = "<p>" + result + "</p>";

}


add.addEventListener("click", addition);
sub.addEventListener("click", subtraction);
mult.addEventListener("click", multiply);
div.addEventListener("click", divide);

