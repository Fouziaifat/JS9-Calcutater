let outPut = document.getElementById("outPut");

function getNumber(num) {
    outPut.value += num;

}
function calcutate() {
    try {
        outPut.value = eval(outPut.value);
    }
    catch (error) {
        console.log(error);
    }
}
function clearResult() {
    outPut.value = "";
};
function backspace() {
    outPut.value = outPut.value.slice(0, -1);
}