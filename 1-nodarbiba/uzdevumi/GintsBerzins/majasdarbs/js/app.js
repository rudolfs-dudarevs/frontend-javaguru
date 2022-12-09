const calc11 = document.getElementById("calc1-1");
const calc12 = document.getElementById("calc1-2");
const calc21 = document.getElementById("calc2-1");
const calc22 = document.getElementById("calc2-2");
const calc31 = document.getElementById("calc3-1");
const calc32 = document.getElementById("calc3-2");

const calculationOneOutput = document.getElementById("calculationOne-output");
const calculationTwoOutput = document.getElementById("calculationTwo-output");
const calculationThreeOutput = document.getElementById("calculationThree-output");

const calculationOne = () => {
    const result = calc11.value / 100 * calc12.value;
    calculationOneOutput.innerText = result;
}

const calculationTwo = () => {
    const result = calc21.value / calc22.value * 100;
    calculationTwoOutput.innerText = result.toFixed(2) + "%";
}

const calculationThree = () => {
    const result = (calc32.value - calc31.value) / calc31.value * 100;
    calculationThreeOutput.innerText = result + "%";
}

const calculate = (operation) => {
    if(operation === "calculation1") {
        calculationOne();
    } else if (operation === "calculation2") {
        calculationTwo();
    } else {
        calculationThree();
    }
}