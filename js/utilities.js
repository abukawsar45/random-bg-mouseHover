// input field data capture
function getInputFieldData(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    return inputFieldString;
}
//  input field clear
function inputFieldClear(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    inputField.value = '';
    return inputField
}
// results function 1
function resultCalculation(inputId1, inputId2) {
    const inputValueA = parseFloat(inputId1);
    const inputValueB = parseFloat(inputId2);
    const results = (0.5 * (inputValueA * inputValueB)).toFixed(2);
    return results;
}
// results function 2
function getCalculation(inputData1, inputData2) {
    const inputValueA = parseFloat(inputData1);
    const inputValueB = parseFloat(inputData2);
    const results = (inputValueA * inputValueB).toFixed(2);
    return results
}
// results function 3 for Ellipse
function resultEllipseCalculation (inputData1, inputData2) {
    const inputValueA = parseFloat(inputData1);
    const inputValueB = parseFloat(inputData2);
    const a = 3.14
    const results = (a * (inputValueA * inputValueB)).toFixed(2);
    return results
}