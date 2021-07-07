let value = 1;
value = 2;

// 여기서 = 가 연산자, 첫번째 줄은 변수 선언 단계로써 대입 연산자에 해당하지 않음

// 산술 연산자
// +
// -
// *
// /
let a = 1 + 2;
console.log(a);

// 증감 연산자
let b = 1;
b++;
++b;
console.log(a);

let c = 1;
console.log(c++); // 1 출력됨.
console.log(++c); // 3 출력됨.
// -- 도 동일

// 대입 연산자
// +=, -=, *=, /=

// 논리 연산자
// !: NOT, true는 false로, false는 true로 바꿔줌
// &&: AND, 양쪽의 값이 둘 다 true 일때만 결과물이 true
// ||: OR, 양쪽의 값 중 하나라도 true 라면 결과물이 true

// 연산 순서: 순서는 NOT -> AND -> OR
const value2 = !((true && false) || (true && false) || !false);
// 괄호 우선
// ! 먼저 -> !((true && false) || (true && false) || true);
// AND -> !(false || false || true);
// OR -> !true;
// 결과값 = false
console.log(value2);

// 비교 연산자
const a1 = 1;
const b1 = 1;
const equals1 = a1 === b1; // == 도 동일한 결과
console.log(equals1); // true
// == 과 ===의 차이는 2개 있을때는 타입 검사까지 하지 않음. 즉 1과 문자 '1'이 동일한 값으로 간주됨, 0과 false도
const a2 = 1;
const b2 = 1;
const equals2 = a2 === b2;
console.log(equals2);
// true

const a3 = 0;
const b3 = false;
const equals3 = a3 == b3;
console.log(equals3);
// true

const a4 = null;
const b4 = undefined;
const equals4 = a4 == b4;
console.log(equals4);
// true
// 특수한 상황이 아닌 경우 == 대신 ===을 사용하는 것이 권장됨. ==는 실수할 확률이 높아짐

// 두 값이 일치하지 않는지 확인
const equals5 = "a" !== "b";
console.log(equals5);
// true

console.log(1 != "1"); // false
console.log(1 !== "1"); // true

//특수한 상황이 아닌 경우 != 대신 !==을 사용하는 것이 권장됨. 이유는 위와 동일

console.log("=========크고 작음=========");
// 크고 작음
const a_1 = 10;
const b_1 = 15;
const c_1 = 15;

console.log(a_1 < b_1); // true
console.log(b_1 > a_1); // true
console.log(a_1 > c_1); // false

// 문자열 붙이기
const a_2 = "안녕";
const b_2 = "하세요";
console.log(a_2 + b_2);
// + 를 사용해서 붙일 수 있음
