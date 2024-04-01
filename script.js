function calculate() {
    var a = parseInt(document.getElementById('bookOne').value);
    var b = parseInt(document.getElementById('bookTwo').value);
    var c = parseInt(document.getElementById('bookThree').value);
    var d = parseInt(document.getElementById('bookFour').value);
    var e = parseInt(document.getElementById('bookFive').value);
    if (a > 100 && b > 100 && c > 100 && d > 100 && e > 100) {
        alert("Please enter correct value");
    }
    else {
        var obtain = a+b+c+d+e;
        document.getElementById("obtain").innerHTML = obtain;
        document.getElementById("obtain2").innerHTML = obtain;
        var per = obtain/500*100;
        document.getElementById("per").innerHTML = per;
        if (a>40 && b>40 && c>40 && d>40 && e>40) {
            document.getElementById("remarks").innerHTML = "Pass";
        }
        else {
            document.getElementById("remarks").innerHTML = "Fail";
        }
        if (per>=80) {
            document.getElementById("grade").innerHTML="A";
        }
        else if (per>=70) {
            document.getElementById("grade").innerHTML="B";
        }
        else if (per>=60) {
            document.getElementById("grade").innerHTML="C";
        }
        else if (per>=50) {
            document.getElementById("grade").innerHTML="D";
        }
        else if (per>=40) {
            document.getElementById("grade").innerHTML="E";
        }
        else {
            document.getElementById("grade").innerHTML="F";
        }
    }

    console.log(a, b, c, d, e)
    
    var outputDiv = document.getElementById("outputDiv");
    outputDiv.textContent = a;

    var outputDiv = document.getElementById("outputDiv2");
    outputDiv.textContent = b;

    var outputDiv = document.getElementById("outputDiv3");
    outputDiv.textContent = c;

    var outputDiv = document.getElementById("outputDiv4");
    outputDiv.textContent = d;

    var outputDiv = document.getElementById("outputDiv5");
    outputDiv.textContent = e;
}

