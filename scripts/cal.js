let exp1, exp2, expcount = 0;
function calDisplay(val) {
    let currentVal = document.getElementById("cal").value;
    if (val == "=") {
        if (expcount < 2) {
            let len = exp1.length;
            let exp = currentVal[len];
            let exp2 = currentVal.substring(len + 1, currentVal.length);
            calResult(Number(exp1), Number(exp2), exp);
        }
        else {
            document.getElementById("cal").value = null;
        }
    }
    else if (expcount < 2) {
        if (!isNaN(val)) {

            currentVal += val;
            console.log(currentVal);
            document.getElementById("cal").value = currentVal;
        }
        else {
            exp1 = currentVal;
            expcount += 1;
            console.log("exp1 is " + exp1 + typeof (exp1) + exp1.length)
            currentVal += val;
            console.log("else val " + currentVal);
            document.getElementById("cal").value = currentVal;
        }
    }
    else {
        document.getElementById("cal").value = null;
        document.getElementById("cal").value = val;
        expcount = 0;
    }

}
function calResult(resval1, resval2, resexp) {
    console.log(resval1, resexp, resval2);
    let result;
    if (resexp == "+") {
        result = resval1 + resval2;
    } else if (resexp == "-") {
        result = resval1 - resval2;
    }
    else if (resexp == "*") {
        result = resval1 * resval2;
    }
    else if (resexp == "/") {
        result = resval1 / resval2;
    }
    else {
        document.getElementById("cal").value = null;
    }
    expcount += 1;
    document.getElementById("cal").value += " = " + result;

}