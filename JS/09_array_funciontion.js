// 배열 내장함수

// forEach
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

superheroes.forEach((hero) => {
  console.log(hero);
});
console.log("=========");

// map
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = (n) => n * n;
const squared = array.map(square);
console.log(squared);
// map 함수의 파라미터로는 변화를 주는 함수를 전달
/*
const squared = array.map(n => n * n);
console.log(squared); 
와 동일
*/
console.log("=========");

// indexOf
const index = superheroes.indexOf("토르");
console.log(index);

console.log("=========");

// findIndex
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

const index_of = todos.findIndex((todo) => todo.id === 3);
console.log(index_of);
//배열 안에 있는 값이 객체이거나, 배열이라면 indexOf 로 찾을 수 없음

console.log("=========");

//find
const todo = todos.find((todo) => todo.id === 3);
console.log(todo);
//findOf와 유사하지만 찾아낸 값이 몇 번째인지가 아닌 찾아낸 값 자체를 반환
console.log("=========");

// filter
const tasksNotDone = todos.filter((todo) => todo.done === false); // const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);
// filter 함수는 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듦
console.log("=========");

// splice
const numbers = [10, 20, 30, 40];
const index2 = numbers.indexOf(30);
numbers.splice(index2, 1);
console.log(numbers);
// 배열에서 특정항목을 제거할때 사용
console.log("=========");

// slice
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 40]
// 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열은 건들이지 않음
console.log("=========");

// shift 와 pop
// shift queue라면 pop은 stack
const value_shift = numbers.shift();
console.log(value_shift); // 10
console.log(numbers); // [20, 40]

const value_pop = numbers.pop();
console.log(value_pop); // 40
console.log(numbers); // [20]
// shift 는 첫번째 원소를 배열에서 추출 (추출하는 과정에서 배열에서 해당 원소는 사라집니다.)
// pop 은 push 의 반대. push 는 배열의 맨 마지막에 새 항목을 추가하고, pop 은 맨 마지막 항목을 추출

console.log("=========");

// unshift
const numbers_2 = [10, 20, 30, 40];
numbers_2.unshift(5);
console.log(numbers_2); // [ 5, 10, 20, 30, 40 ]
//unshift 는 shift 의 반대. 배열의 맨 앞에 새 원소를 추가.
console.log("=========");

// concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);
[1, 2, 3, 4, 5, 6];
console.log(arr1);
console.log(arr2);
// concat은 여러 개의 배열을 하나의 배열로 합쳐줌
// arr1 과 arr2 에 변화를 주지 않음
console.log("=========");

// join
const array_2 = [1, 2, 3, 4, 5];
console.log(array_2.join()); // 1,2,3,4,5
console.log(array_2.join(" ")); // 1 2 3 4 5
console.log(array_2.join(", ")); // 1, 2, 3, 4, 5
// join 은 배열 안의 값들을 문자열 형태로 합쳐줌.
// 피이썬이랑 동일

console.log("=========");
// reduce
// 정말 중요!!!!
const numbers_3 = [1, 2, 3, 4, 5];
let sum = numbers_3.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);
/*
{ accumulator: 0, current: 1 }
{ accumulator: 1, current: 2 }
{ accumulator: 3, current: 3 }
{ accumulator: 6, current: 4 }
{ accumulator: 10, current: 5 }

reduce 함수에는 두개의 파라미터를 전달. 
첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수, 두번째 파라미터는 reduce 함수에서 사용 할 초깃값.
여기서 accumulator 는 누적된 값을 의미
*/
console.log("=========");

function countBiggerThanTen(numbers) {
  const reduce_arr = numbers.reduce((prev, current) => {
    if (current > 10) prev.push(current);
    return prev;
  }, []);
  return reduce_arr.length;
}
const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
