// Calculate The Area Of Triangle Function Ex.1
function triangleArea() {
    var a = parseFloat(document.getElementById("side1").value),
        b = parseFloat(document.getElementById("side2").value),
        c = parseFloat(document.getElementById("side3").value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("triangle-area-h3").innerHTML = "You Have To Fill All Fields With Correct Values";
    } else {
        var s = (a + b + c) / 2,
        area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
        document.getElementById("triangle-area-h3").innerHTML = "Your Triangle sides is: " + a + " , " + b + " , " + c + "<br> The Area Of Triangle Is: " + area;
    }
    clear();
}
//=======================================================================================
//=======================================================================================

// Guess Function Ex.2
function guess() {
    var number = parseInt(document.getElementById("your-number").value),
        randomNumber = Math.floor(Math.random() * 10);
    if (isNaN(number) || number < 1 || number > 10) {
        document.getElementById("guess-h3").innerText = "You Have To Select An Integer Number From 1 To 10"
    } else {
        if(number === randomNumber) {
            document.getElementById("guess-h3").innerText = "Good Work"
        }else {
            document.getElementById("guess-h3").innerText = "Not Matched"
        }
    }
    clear();
}

//=======================================================================================
//=======================================================================================

// Multiplication And Division Functions Ex.3

function multiplication() {
    var x = parseFloat(document.getElementById("first-number").value),
    y = parseFloat(document.getElementById("second-number").value);
    if(isNaN(x) || isNaN(y)) {
        document.getElementById("div-mul-h3").innerText = "Sorry You Have To select correct numbers";
    }else {
        var z = x*y;
        document.getElementById("div-mul-h3").innerText = "The Result Is: " + z;
    }
    clear();
}
function division() {
    var x = parseFloat(document.getElementById("first-number").value),
    y = parseFloat(document.getElementById("second-number").value);
    z;
    if(isNaN(x) || isNaN(y)) {
        document.getElementById("div-mul-h3").innerText = "Sorry You Have To select correct numbers";
    }else {
        z = x/y;
        document.getElementById("div-mul-h3").innerText = "The Result Is: " + z;
    }
    clear();
    
}


//=======================================================================================
//=======================================================================================

// Tempreture Convertion Function Ex.4
function tempreture() {
    var type = document.getElementById("temp-type").value,
        temp = parseFloat(document.getElementById("temp").value);
    if (isNaN(temp)) {
        document.getElementById("temp-convertion-h3").innerText = "Please Insert A Valid Tempreture Value And Select You Tempreture Type";
    } else {
        if (type == "c") {
            var f = ((temp*9)/5) + 32;
            document.getElementById("temp-convertion-h3").innerText = temp + " C is " + f + " F";
        }else if (type == "f"){
            var c = (temp-32)/9*5;
            document.getElementById("temp-convertion-h3").innerText = temp + " F is " + c + " C";
        }
    }
    clear();
}


//=======================================================================================
//=======================================================================================

// Get File Extension Function Ex.5

function fileExtention() {
    var fileName = document.getElementById("file-name").value;
    if (fileName.indexOf(".") > 0) {
        var extension = fileName.substring(fileName.indexOf("."));
        document.getElementById("file-extension-h3").innerText = extension;
    }else {
        document.getElementById("file-extension-h3").innerText = "Please Write a Corect Name";
    }
    clear();
}

//=======================================================================================
//=======================================================================================

// Get The Diffrence For no.13 Ex.6

function no13() {
    var number = parseFloat(document.getElementById("number").value);
    if (number > 13 && !isNaN(number)) {
        var diffrence = Math.pow((number - 13),2);
        document.getElementById("diffrence-h3").innerText = "The Result Is: " + diffrence;
    }else if (number <= 13 && !isNaN(number)) {
        var diffrence = 13 - number;
        document.getElementById("diffrence-h3").innerText = "The Result Is: " + diffrence;
    }else {
        document.getElementById("diffrence-h3").innerText = "You Have To Select A Valid Number";
    }
    clear();
}

//=======================================================================================
//=======================================================================================

// Get The Sum Of Two Integers Ex.7

function sum() {
    var number1 = parseFloat(document.getElementById("calc1").value),
        number2 = parseFloat(document.getElementById("calc2").value);
    if (number1 === number2 && !isNaN(number1) && !isNaN(number2)) {
        var sum = (number1 + number2) * 3;
        document.getElementById("calc-h3").innerText = "The Result Is: " + sum;
    }else if (number1 != number2 && !isNaN(number1) && !isNaN(number2)) {
        var sum = number1 + number2;
        document.getElementById("calc-h3").innerText = "The Result Is: " + sum;
    }else {
        document.getElementById("calc-h3").innerText = "Please Type Valid Numbers";
    }
    clear();
}

//=======================================================================================
//=======================================================================================

// Check if any number is 50 or the sum is 50 Ex.8
function check50() {
    var number1 = parseFloat(document.getElementById("check1").value),
        number2 = parseFloat(document.getElementById("check2").value);
    if ((number1 == 50 || number2 == 50 || number1+number2 == 50) && !isNaN(number1) && !isNaN(number2)){
        document.getElementById("check-h3").innerText = "True";
    }else if((number1 != 50 || number2 != 50 || number1+number2 != 50) && !isNaN(number1) && !isNaN(number2)) {
        document.getElementById("check-h3").innerText = "False";
    }else {
        document.getElementById("check-h3").innerText = "Please Insert Valid Numbers";
    }
    clear();
}


//=======================================================================================
//=======================================================================================

// The largest Number Function Ex.12
function maxnum() {
    var a = parseFloat(document.getElementById("number1").value),
        b = parseFloat(document.getElementById("number2").value),
        c = parseFloat(document.getElementById("number3").value);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)){
        var max = Math.max(a,b,c);
        document.getElementById("maxnum-h3").innerText = "The maximum Number Is: " + max;
    }else {
        document.getElementById("maxnum-h3").innerText = "Insert Invalid Numbers";
    }
    
    clear();
}

//=======================================================================================
//=======================================================================================

//compute the sum of three elements of a given array of integers
function sumarr() {
    numbers = [];
    numbers[0] = parseFloat(document.getElementById("num1").value);
    numbers[1] = parseFloat(document.getElementById("num2").value);
    numbers[2] = parseFloat(document.getElementById("num3").value);
    var arrLenght = numbers.length,
        i,
        sum = 0;
    for (i=0; i<arrLenght; i++) {
        sum += numbers[i];
    }
    if (!isNaN(sum)) {
        document.getElementById("sumarr-h3").innerText = "The Sum Of Array Is: " + sum;
    }else {
        document.getElementById("sumarr-h3").innerText = "Please Insert Valid Numbers In The Fields";
    }
    clear();
}

//=======================================================================================
//=======================================================================================

// Clear Inputs Function
function clear() {
    var inputs = document.getElementsByTagName("input");
    for (var i=0; i<inputs.length; i++) {
        inputs[i].value = "";
    }
}

//=======================================================================================
//=======================================================================================

// Reset Results Function
function resetResult(idName) {
    document.getElementById(idName).innerText = ""
}


//=======================================================================================
//=======================================================================================

// Check Inputs Validaty Function
// function checkEmpty(idName) {
//     var id = document.getElementById(idName),
//         idInputs = id.getElementsByTagName("input");
//     for (var i=0; i<idInputs.length; i++) {
//         if (idInputs[i].value == "") {
//             document.getElementById(idName + "-h3").innerText = "Input Field " + i+1 + " Is Empty"
//         }
//     }
// }


// //=======================================================================================
// //=======================================================================================

// // Make Inputs Value parseFloat

// function beFloat(idName) {
//     var id = document.getElementById(idName),
//         idInputs = id.getElementsByTagName("input"),
//         number = [];
//     for (var i = 0; i<idInputs.length; i++) {
//         number[i] = parseFloat(idInputs[i].value);
//     }
//     return number;
// }

// var number = beFloat();
// //=======================================================================================
// //=======================================================================================

// function checkNan(number) {
//     var check = 1;
//     for (var i=0; i<number.length; i++) {
//         if (isNaN(number[i]) ) {
//             check = 0;
//         }
//     }
//     if (check === 0) {
//         document.getElementById("triangle-area-h3").innerHTML = "You Have To Fill All Fields With Correct Values";
//     }else {

//     }
// }