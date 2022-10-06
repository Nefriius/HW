
// function to calc square
function square(numLength) {
    return 4 * numLength;
}
// function to cal circle
function radCircle(numLength) {
    return 2 * Math.PI * numLength;
}
// function to cal rectangle
function radRectangle(numWidth, numLength) {
    return numLength + numLength * 2;
}

function isValid(numWidth, numLength) {
    let msg = "";
    //test one error at a time w/if
    if (isNaN(numLength)) {
        msg += "Please enter width amount\n";
    }
    if (isNaN(numWidth)) {
        msg += "Please enter length amount\n";
    }
    return msg;
}
document.getElementById("btnGetPerim").addEventListener('click', function () {
    //inputs
    let length = parseInt(document.getElementById("numLength").value);
    let width = parseInt(document.getElementById("numWidth").value);
    let errors = isValid(length, width);

    //processing
    if (errors == "") {
        let total = isValid(numLength, numWidth);
        //output result
        alert(`${total.toFixed(2)}`);
    } else {
        alert(errors);
    }
});