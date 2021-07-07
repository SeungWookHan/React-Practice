// for 문
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("=========");

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("=========");

// 배열과 for
const names = ["멍멍이", "야옹이", "멍뭉이"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log("=========");
for (const name of names) {
  console.log(name);
}
console.log("=========");
for (const name in names) {
  console.log(name); // 0, 1, 2
}
console.log("=========");
names.forEach((v) => {
  console.log(v);
});

/*
추가 작성
forEach: Array, Map, Set에서 사용 가능
forin: Array, Object의 key 출력됨, 객체의 Enumerable(열거가능한) 속성이 true로 설정된 속성들만 접근가능
forof: Array, Map, Set에서 사용 가능. 컬렉션 전용. [Symbol.iterator] 속성이 있는 모든 컬렉션 요소에 대해 반복

let arr = [1,2,3,4,5];
arr[“test”] = 1;
for (const i in arr) { console.log(i)} // 0,1,2,3,4,test
console.log(‘ — — — — — — — — — — — — ‘)
for (const i of arr) { console.log(i)} // 1,2,3,4,5
*/
console.log("=========");

// while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
console.log("=========");

// forof
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}
// 배열에 관한 반복문을 돌리기 위해서 만들어진 반복문
console.log("=========");

// forin
// 객체를 위한 반복문
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

/*
Object.entries: [[키, 값], [키, 값]] 형태의 배열로 변환
Object.keys: [키, 키, 키] 형태의 배열로 변환
Object.values: [값, 값, 값] 형태의 배열로 변환
 */
for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
console.log("=========");

// break과 continue
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 다음 루프를 실행
  console.log(i);
  if (i === 5) break; // 반복문을 끝내기
}
console.log("=========");

function biggerThanThree(numbers) {
  numbers = numbers.filter((number) => number > 3);
  return numbers;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers2)); // [4, 5, 6, 7]
