document.getElementById("zero").onclick = function() { // Show's all numbers from 0 to 9
    document.getElementById("display").innerHTML += "0"; 
};
document.getElementById("one").onclick = function() {
    document.getElementById("display").innerHTML += "1"; 
};
document.getElementById("two").onclick = function() {
    document.getElementById("display").innerHTML += "2";
};
document.getElementById("three").onclick = function() {
    document.getElementById("display").innerHTML += "3";
};
document.getElementById("four").onclick = function() {
    document.getElementById("display").innerHTML += "4";
};
document.getElementById("five").onclick = function() {
    document.getElementById("display").innerHTML += "5";
};
document.getElementById("six").onclick = function() {
    document.getElementById("display").innerHTML += "6";
};
document.getElementById("seven").onclick = function() {
    document.getElementById("display").innerHTML += "7";
};
document.getElementById("eight").onclick = function() {
    document.getElementById("display").innerHTML += "8";
};
document.getElementById("nine").onclick = function() {
    document.getElementById("display").innerHTML += "9";
};
document.getElementById("delete").onclick = function() { // Removes the last number on the display
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0, document.getElementById("display").innerHTML.length - 1);
};
document.getElementById("decimal").onclick = function() { // Add's a decimal
    document.getElementById("display").innerHTML += "." 
};
document.getElementById("divide").onclick = function() { // Add's all the arithmetic signs from / to +
    document.getElementById("display").innerHTML += " / " 
};
document.getElementById("multiply").onclick = function() {
    document.getElementById("display").innerHTML += " * " 
};
document.getElementById("subtract").onclick = function() {
    document.getElementById("display").innerHTML += " - " 
};
document.getElementById("addition").onclick = function() {
    document.getElementById("display").innerHTML += " + " 
};
document.getElementById("enter").onclick = function() { // Calculates all the numbers on the display
    for (var i = 0; i < document.getElementById("display").innerHTML.length; i++) {
        if (document.getElementById("display").innerHTML.charAt(i) === "/") { // Divides the numbers
            let a = Number(document.getElementById("display").innerHTML.substring(0, i - 1));
            let b = Number(document.getElementById("display").innerHTML.substring(i + 2, document.getElementById("display").innerHTML.length));
            let ans = a / b;
            document.getElementById("display").innerHTML = ans.toString();
        }
        if (document.getElementById("display").innerHTML.charAt(i) === "*") { // Multiplies the numbers
            let a = Number(document.getElementById("display").innerHTML.substring(0, i - 1));
            let b = Number(document.getElementById("display").innerHTML.substring(i + 2, document.getElementById("display").innerHTML.length));
            let ans = a * b;
            document.getElementById("display").innerHTML = ans.toString();
        }
        if (document.getElementById("display").innerHTML.charAt(i) === "-") { // Subtracts the numbers
            let a = Number(document.getElementById("display").innerHTML.substring(0, i - 1));
            let b = Number(document.getElementById("display").innerHTML.substring(i + 2, document.getElementById("display").innerHTML.length));
            let ans = a - b;
            document.getElementById("display").innerHTML = ans.toString();
        }
        if (document.getElementById("display").innerHTML.charAt(i) === "+") { // Adds the numbers
            let a = Number(document.getElementById("display").innerHTML.substring(0, i - 1));
            let b = Number(document.getElementById("display").innerHTML.substring(i + 2, document.getElementById("display").innerHTML.length));
            let ans = a + b;
            document.getElementById("display").innerHTML = ans.toString();
        }
      }
};