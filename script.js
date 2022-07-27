let inputNumFirst = "";
let inputNumSecond = "";
let operation = "";
let result;
let resultOfCalc = document.getElementById("resultOfCalc");
let insertResult = document.getElementById("insertResult"); 
let val;
let output;

function numClick(input){

    resultOfCalc.innerHTML = " ";

    if(operation === ''){
        inputNumFirst += input;
        insertResult.value = inputNumFirst;
    }else{
        inputNumSecond += input;
        insertResult.value = inputNumSecond;
    }
}

function equalOperator(){
    switch (operation){
        case '+':
            result = Number(inputNumFirst) + Number(inputNumSecond);
            resultOfCalc.innerHTML = result;
            clearValue();
            break;

        case '-':
            result = Number(inputNumFirst) - Number(inputNumSecond);
            resultOfCalc.innerHTML = result;
            clearValue();
            break;  

        case 'x':
            result = Number(inputNumFirst) * Number(inputNumSecond);
            resultOfCalc.innerHTML = result;
            clearValue();
            break; 
              
        case '÷':
            result = Number(inputNumFirst) / Number(inputNumSecond);
            resultOfCalc.innerHTML = result;
            clearValue();
            break;

        case '%':
            result = Number(inputNumFirst) % Number(inputNumSecond);
            resultOfCalc.innerHTML = result;
            clearValue();
            break;             
        default:
            alert("unknown operator");
    }
    
    // if(operation === '+'){
    //     sum = Number(inputNumFirst) + Number(inputNumSecond);
    // }
    console.log(result);
}

function operatorClick(input){ 

    if(input === "+"){
        operation = "+";   
        insertResult.value += operation;

    }else if(input === "-"){
        operation = "-";
        insertResult.value += operation;

    } else if(input === "x"){
        operation = "x";
        insertResult.value += operation;

    }else if(input === "÷"){
        operation = "÷";
        insertResult.value += operation;
    
    }else if(input === "%"){
        operation = "%";
        insertResult.value += operation;
    }

}

function clearValue(){
    inputNumFirst = "";
    inputNumSecond = "";
    operation = "";
    insertResult.value="";      

}

function deleteChar(){
    val = inputNumFirst;
    output = val.slice(0, -1);
    inputNumFirst = output;
    insertResult.value = inputNumFirst;
}