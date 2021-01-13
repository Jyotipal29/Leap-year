var userInput = document.querySelector("#input");
var btn =document.querySelector("#button");
var outputDiv =document.querySelector("#output");

function checkLeap(input){
    
    if(input%4==0){
        outputDiv.innerHTML ="You were born on a leap year";
    }else{
        outputDiv.innerHTML ="You were not born on a leap year";
    }
}




function clickEventHandler(){
    var input =userInput.value;
    if(input === ""){
        outputDiv.innerHTML ="please enter your birth year";
    } else
    if(isNaN(input)){
        outputDiv.innerHTML ="Enter number only";
    }else{
        checkLeap(input)
    }
    
}

btn.addEventListener("click",clickEventHandler)