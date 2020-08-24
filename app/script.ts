document.querySelector('.event').addEventListener('click', calc);

function calc() {
    debugger
    let ageInputElement: HTMLInputElement = document.querySelector('.calc__age-input') as HTMLInputElement;
    let age = ageInputElement.value;

    let genderInputElement: HTMLInputElement = document.querySelector('#gender-m') as HTMLInputElement;
    let isMan = genderInputElement.checked;

    let sumInputElement: HTMLInputElement = document.querySelector('.calc__sum-input') as HTMLInputElement;
    let sum = ageInputElement.value;

    let ageInputElement: HTMLInputElement = document.querySelector('.calc__years-input') as HTMLInputElement;
    let years = ageInputElement.value;
    let result = age * sum;
    if (isMan == true) {
        let result = result + years;
    } else {
        let result = result + years * 5;
    }
    let resultElement: HTMLDivElement = document.querySelector('.calc_result') as HTMLDivElement;
    resultElement.innerHTML = result.toString;
}


