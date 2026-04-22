let y = Math.floor(Math.random() * 20+1);
let countGuess = 1;

function guess(){
    let x =  document.getElementById("number").value;
    if(x == y){
        document.getElementById("message").innerHTML= `Congratulations!!! you guess it right in ${countGuess} guess`;
    }else if(x > y){
        countGuess++;
        document.getElementById("message").innerHTML= `OOPS Sorry! try smaller Number`;
    }else{
        countGuess++;
        document.getElementById("message").innerHTML= `OOPS Sorry! try greater Number`;

    }
}