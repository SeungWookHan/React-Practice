// if 문

const a = 1;
if (a + 1 === 2) {
  console.log("a + 1 이 2 입니다.");
} // 위 조건에 만족하므로 아래 console.log 실행

const b = 0;
if (b + 1 === 2) {
  console.log("b + 1 이 2 입니다.");
} // 위 조건에 만족하지 않으므로 console.log 실행 안함

const c = 1;
if (true) {
  const c = 2;
  console.log("if문 안의 c 값은 " + c);
}
console.log("if문 밖의 c 값은 " + c);

// if - else 문
const d = 10;
if (d > 15) {
  console.log("d 가 15 큽니다.");
} else {
  console.log("d 가 15보다 크지 않습니다.");
}

// if - else if 문
const e = 10;
if (e === 5) {
  console.log('5입니다!');
} else if (e === 10) {
  console.log('10입니다!');
} else {
  console.log('5도 아니고 10도 아닙니다.');
}

// switch - case 문
const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}
