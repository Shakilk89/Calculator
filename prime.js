function DeleteMe(){
    document.getElementById("myResult").value = "";
}

function calculator(newValue){
    document.getElementById("myResult").value += newValue;
}

function Answer(){
    let b = eval(document.getElementById("myResult").value );
        document.getElementById("myResult").value = b;
}