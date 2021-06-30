function multiply(a, b) {
    return a * b;
}

function multiplyX(x) {
    return function (a) {
        return multiply(a, x);
    }
}

console.log(multiply(1, 2))

function add(a, b) {
    return a + b;
}

console.log(add(1, 2))

function addX(x) {
    return function (a) {
        return add(x, a);
    }
}

const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
console.log(`2배수 곱은 ${multiplyTwo(2)}`)
console.log(`3배수 곱은 ${multiplyThree(2)}`)

const addFour = addX(4);
console.log(`4 더하기는 ${addFour(2)}`)

// 2x * 3 + 4
const formulaA = function(x){
    return addFour(multiplyThree(multiplyTwo(x)))
}

console.log(`2x * 3 + 4는 ${formulaA(2)}`)
// 하지만 위와 같은 공식 함수의 단점은 괄호가 많고, 혼동이 쉽고,
// 함수가 실행되는 순서가 우리가 인지하고 있는 순서의 반대임

// 리듀스(배열을 원하는 형태로 변경)를 활용
const formulaB = [
    multiplyTwo,
    multiplyThree,
    addFour
].reduce(function(prevFunc, nextFunc) {
    return function(x) {
        // 실제 연산 과정
        return nextFunc(prevFunc(x))
    }
}, k => k)

console.log(`reduce를 활용한 연산 ${formulaB(2)}`)

// 조합 함수(compose) - 오픈소스로 많은 라이브러리에 포함되어 있음
function compose(...args) {
    return args.reduce(function(prevFunc, nextFunc) {
        return function(...values){
            return nextFunc(prevFunc(...values));
        }
    }, k => k);
}

/// (((x * 2) + 5) * 3) + 4

const fomula = compose(
    multiplyX(2),
    addX(5),
    multiplyX(3),
    addX(4),
);

console.log(fomula(10))
