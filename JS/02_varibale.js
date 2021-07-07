// 변수
let value = 1;
console.log(value);

value = 2;
console.log(value);

// let value = 2 재선언 불가능

// var이 아닌 let을 사용하는 이유는 var의 경우 같은 변수 재선언이 가능하다. 이를 보완하기 위해 ES6부터 let, const 추가

// 상수
const a = 1;
// a = 2; 재선언, 재할당 불가능

// 숫자
let number = 1;

// 문자열
let text = "hello";

// 불리언
let good = true;
let bad = false;

// null & undefined
const friend = null;
// null은 주로 이 값이 없다! 라고 선언할 때 사용

let criminal;
console.log(criminal); // undefined
// undefined는 아직 값이 설정되지 않은 것을 의미
