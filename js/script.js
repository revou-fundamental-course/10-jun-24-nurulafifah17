
function konversisuhu{
var inputtemp = parseFloat(document.getElementById('inputtemp'.value));
var resultfahrenheit =(inputtemp * 9/5) + 32;

var resultcalculate = document.getElementById('resultcalculate');
resultcalculate.innerHTML =
Fahrenheit: ${inputtemp.toFixed(2)} * 9/5 + 32 = ${resultfahrenheit.toFixed(2)}
;
}

function reversesuhu() {
    var inputfahrenheit = parseFloat(document.getElementById('inputfahrenheit').value);
    var resultcelcius = (inputfahrenheit - 32) * 5/9;

    var resultcalculate = (document.getElementById('resultcalculate');
    resultcalculate.innerHTML =
    Celcius: (${inputfahrenheit.toFixed(2)} - 32) * 5/9 = ${resultcelcius.toFixed(2)}
    ;
}

function resetsuhu() {
    document.getElementById('inputtemp').value = '';
    document.getElementById('inputfahrenheit').value = '';
    document.getElementById('inputcalculate').value = '';
}