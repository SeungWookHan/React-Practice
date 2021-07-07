// 객체는 한 변수 혹은 상수에 여러가지 정보를 담기 위함이였다면, 배열은 여러개의 항목들이 들어있는 리스트

// 숫자 배열
const array = [1, 2, 3, 4, 5];

// 객체 배열
const objects = [{ name: "멍멍이" }, { name: "야옹이" }];

// 원소 접근
console.log(objects);
console.log(objects[0]);
console.log(objects[1]);
// 당연히 첫번재 항목은 1이 아닌 0 으로 접근해야함

console.log("==================");
// 배열에 새 항목 추가하기
const objects2 = [{ name: "멍멍이" }, { name: "야옹이" }];

objects2.push({
  name: "멍뭉이",
});

console.log(objects2);

console.log("==================");
// 배열의 크기 알아내기
console.log(objects.length); // 2
console.log(objects2.length); //3
objects.push({
  name: "멍뭉이",
});
console.log(objects.length); //2
