var inputW = document.getElementById("inputW");
var outputW = document.getElementById("outputW");
var inputTypeW = document.getElementById("inputTypeW");
var outputTypeW = document.getElementById("outputTypeW");
var inputTypeValueW, outputTypeValueW;

inputW.addEventListener("keyup", getOutput);
inputTypeW.addEventListener("change", getOutput);
outputTypeW.addEventListener("change", getOutput);

function getOutput() {
    switch (inputTypeW.value) {
        case "kg":
            inputTypeValueW = 1;
            break;
        case 'g':
            inputTypeValueW = 1/1000;
    }
    switch (outputTypeW.value) {
        case "kg":
            outputTypeValueW = 1;
            break;
        case 'g':
            outputTypeValueW = 1/1000;
    }

    outputW.value = Number(inputW.value) * inputTypeValueW / outputTypeValueW;
}