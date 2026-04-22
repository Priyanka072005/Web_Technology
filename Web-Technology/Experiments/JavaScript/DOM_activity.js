function add(){
    calculate("+");
}
function subtract(){
    calculate("-");
}
function multiply(){
    calculate("*");
}
function divide(){
    calculate("/");
}

function calculate(operator){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let result = document.getElementById("result");

    document.getElementById("num1Error").innerHTML="";
    document.getElementById("num2Error").innerHTML="";
    document.getElementById("resultError").innerHTML="";

    if(n1 == "" || n2 == ""){
        result.value="Please enter both numbers";
        result.style.color="red";
        return;
    }
    n1 = Number(n1);
    n2 = Number(n2);

    if(operator === "/" && n2 == 0){
        result.value="cannot divide by zero";
        result.style.color="red";
        return;
    }

    let answer;
    switch(operator){
        case "+": answer = n1 + n2; 
                break;
        case "-": answer = n1 - n2;
                break;
        case "*" : answer = n1 * n2;
                break;
        case "/": answer = n1 / n2;
                break;
    }

    result.value= answer;
    
    result.style.color = "green";

    // clear inputs
    num1.value = "";
    num2.value = "";
}