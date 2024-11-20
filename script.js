let display = "";

function displayvalue(value){
    display += value;
    document.getElementById("screen").value = display;
}

function clearscreen(){
    document.getElementById("screen").value = " ";
}

function evaluate(){
    try{
    display = eval(value);
    document.getElementById("screen").value = display;
    }
    catch(error){
        document.getElementById("screen").value = "Syntax Error";
    }
}
