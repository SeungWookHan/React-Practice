// 프로토타입과 클래스

// 객체 생성자
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function () {
    console.log(this.sound);
  };
}

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();
console.log("=========");

// 프로토타입
function Animal_proto(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal_proto.prototype.say = function () {
  console.log(this.sound);
};
Animal_proto.prototype.sharedValue = 1;

const dog_proto = new Animal_proto("개", "멍멍이", "멍멍");
const cat_proto = new Animal_proto("고양이", "야옹이", "야옹");

dog_proto.say();
cat_proto.say();

console.log(dog_proto.sharedValue);
console.log(cat_proto.sharedValue);
console.log("=========");

// 객체 생성자 상속받기
function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}
Cat.prototype = Animal.prototype;

const dog2 = new Dog("멍멍이", "멍멍");
const cat2 = new Cat("야옹이", "야옹");

dog2.say();
cat2.say();
// call: 첫번째 인자에는 this 를 넣어주어야 하고, 그 이후에는 Animal 객체 생성자 함수에서 필요로 하는 파라미터를 넣어주어야 함

console.log("=========");

// 클래스
class AnimalClass {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

const dog_class = new AnimalClass("개", "멍멍이", "멍멍");
const cat_class = new AnimalClass("고양이", "야옹이", "야옹");

dog_class.say();
cat_class.say();
// 클래스 내부의 함수를 '메서드'라고 부릅니다. 이렇게 메서드를 만들면 자동으로 prototype 으로 등록이 됩니다.
console.log("=========");

// 클래스 상속
class Dog3 extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
  }
}

class Cat3 extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog3 = new Dog3("멍멍이", "멍멍");
const cat3 = new Cat3("야옹이", "야옹");

dog3.say();
cat3.say();
// 상속을 할 때는 extends 키워드를 사용하며, constructor에서 사용하는 super() 함수가 상속받은 클래스의 생성자를 가르킴

console.log("=========");
class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name}을/를 파는 음식점들:`);
    console.log(this.brands.join(", "));
  }
}

const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미노 피자");

const chicken = new Food("치킨");
chicken.addBrand("굽네치킨");
chicken.addBrand("BBQ");

pizza.print();
chicken.print();
