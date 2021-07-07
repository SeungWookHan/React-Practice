// 객체는 우리가 사용할 변수, 상수 등 여러 종류의 값을 담을 수 있게 함
const dog = {
  name: "멍멍이",
  age: 2,
};
console.log(dog.name);
console.log(dog.age);
// 위와 같이 키: 값 형태로 넣으며 키에 대항하는 부분은 공백이 없어야 함. 공백이 있어야 하는 경우에는 따옴표로 감싸 문자열로 넣어줌
// 예: 'key sample': 3

// 객체를 파라미터로 받기
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);

// 객체 비구조화 할당
function print2(hero) {
  const { alias, name, actor } = hero; // 객체에서 값들을 추출해서 새로운 상수로 선언
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
print2(ironMan);
print2(captainAmerica);

function print3({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
print3(ironMan);
print3(captainAmerica);

// 객체 안에 함수 넣기
const dog2 = {
  name: "멍멍이",
  sound: "멍멍!",
  say: function () {
    //함수를 선언 할 때에는 이름이 없어도 됨
    console.log(this.sound);
  },
};

dog2.say();
// 객체 안에 함수를 넣을때 화살표 함수로 넣으면 제대로 동작하지 않음. this 가 제대로 자신이 속한 객체를 가르키게 되는데, 화살표 함수는 그렇지 않기 때문
console.log("==============")

// Getter, Setter
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수가 실행됩니다!");
    return this.a + this.b;
  },
};

console.log(numbers.sum); // numer.sum()이 아닌 number.sum으로 호출 가능
numbers.b = 5;
console.log(numbers.sum);

console.log("==============")

const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log("a가 바뀝니다.");
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log("b가 바뀝니다.");
    this._b = value;
    this.calculate();
  },
};

console.log(numbers2.sum);
numbers2.a = 5;
numbers2.b = 7;
numbers2.a = 9;
console.log(numbers2.sum);
console.log(numbers2.sum);
console.log(numbers2.sum);
