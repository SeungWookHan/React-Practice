function add(a, b) {
  return a + b;
  console.log("호출이 되지 않는 코드");
}

const sum = add(1, 2);
console.log(sum); // 3

// 템플릿 리터럴
function hello(name) {
  console.log(`Hello, ${name}!`);
}
hello("wooogy");

// 화살표 함수
const add2 = (a, b) => {
  return a + b;
};

console.log(add2(1, 2));
// 화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록
// 화살표 함수와 일반 function의 차이점은 가르키는 this의 차이