var inputL = document.getElementById("inputL");
var outputL = document.getElementById("outputL");
var inputTypeL = document.getElementById("inputTypeL");
var outputTypeL = document.getElementById("outputTypeL");
var inputTypeValueL, outputTypeValueL;

inputL.addEventListener("keyup", getOutput);
inputTypeL.addEventListener("change", getOutput);
outputTypeL.addEventListener("change", getOutput);

function getOutput() {
    switch (inputTypeL.value) {
        case "m":
            inputTypeValueL = 1;
            break;
        case 'cm':
            inputTypeValueL = 1/100;
            break;
        case 'km':
            inputTypeValueL = 1000;
    }
    switch (outputTypeL.value) {
        case "m":
            outputTypeValueL = 1;
            break;
        case 'cm':
            outputTypeValueL = 1/100;
            break;
        case 'km':
            outputTypeValueL = 1000;
    }

    outputL.value = Number(inputL.value) * inputTypeValueL / outputTypeValueL;
}