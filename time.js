var inputT = document.getElementById("inputT");
var outputT = document.getElementById("outputT");
var inputTypeT = document.getElementById("inputTypeT");
var outputTypeT = document.getElementById("outputTypeT");
var inputTypeValueT, outputTypeValueT;

inputT.addEventListener("keyup", getOutput);
inputTypeT.addEventListener("change", getOutput);
outputTypeT.addEventListener("change", getOutput);

function getOutput() {
    switch (inputTypeT.value) {
        case "s":
            inputTypeValueT = 1;
            break;
        case 'min':
            inputTypeValueT = 60;
            break;
        case 'hr':
            inputTypeValueT = 3600;
            break;
        case 'd':
            inputTypeValueT = 86400;
    }
    switch (outputTypeT.value) {
        case "s":
            outputTypeValueT = 1;
            break;
        case 'min':
            outputTypeValueT = 60;
            break;
        case 'hr':
            outputTypeValueT = 3600;
            break;
        case 'd':
            outputTypeValueT = 86400;
    }

    outputT.value = Number(inputT.value) * inputTypeValueT / outputTypeValueT;
}