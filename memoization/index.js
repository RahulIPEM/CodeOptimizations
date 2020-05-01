let num = document.getElementById('num');
let btn = document.getElementById('btn');
let withoutMemo = document.getElementById('withoutMemo');
let withMemo = document.getElementById('withMemo');

function factorial(num) {
    console.log('Factorial without memo', num);
    if (num === 0 || num === 1)
        return 1;
    return num * factorial(num - 1);
}

const cache = {};

function factorialMemo(num) {
    console.log('Factorial with memoization', num);
    if (num === 0 || num === 1)
        return 1;

    if (num in cache) {
        return cache[num];
    } else {
        let result = num * factorialMemo(num - 1);
        cache[num] = result;
        return result;
    }
}

btn.addEventListener('click', () => {
    const startTime = performance.now();
    const result = factorial(parseInt(num.value));
    const endTime = performance.now();
    withoutMemo.innerText = `Took ${(endTime - startTime).toFixed(4)} ms to calculate factorial ${result} of number ${parseInt(num.value)}`;

    const startTime1 = performance.now();
    const result1 = factorialMemo(parseInt(num.value));
    const endTime1 = performance.now();
    withMemo.innerText = `Took ${(endTime1 - startTime1).toFixed(4)} ms to calculate factorial ${result1} of number ${parseInt(num.value)}`;
})