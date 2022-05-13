/* 삼항 연산자 */

let a = 10;
let b = 50;
let max = a > b ? a : b;
console.log(max);

/* if 문 */
// 짝수인 경우에는 나누기 2한 값, 홀수인 경우에는 제곱근 출력
const numArray = [1, 16, 49, 121];
const numResult = numArray.map((x) => {
    if(x%2 == 0) {
        return x/2;
    } else {
        return Math.sqrt(x);
    };
});
console.log(numResult);

// 위의 내용을 삼항 연산자로 바꾸어서 실행하라
const ternary = numArray.map((x) => {
    return x%2 == 0 ? x/2 : Math.sqrt(x);
});
console.log(ternary);

/* 삼항 연산자 실습 */
let accessAllowed;
let age = 30;

if(age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
};
console.log(accessAllowed);

// 위의 내용을 삼항 연산자로 바꾸어서 실행하라
const terAllowed = age > 18 ? true : false;
console.log(terAllowed);

/* 스프레드 연산자 */
// 배열 혹은 객체의 값을 꺼내서 보여주는 연산자
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num = [...num1, ...num2];
const numarr = [num1, num2];
console.log(num);
console.log(...num1);
console.log(numarr);

/* 스프레드 연산자와 구조 할당 분해: 
구조 할당 분해할 때 스프레드 연산자를 사용하면 
앞서 배열에 구조 할당 분해되지 않은 남은 값을 전부 가져옴 */
// 위에서 작성한 num 배열을 구조화
const [one, two, ...rest] = num; // num = [1, 2, 3, 4, 5, 6]
console.log(rest);

/* 스프레드 연산자 실습 1 */
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'Red'
};
const updateMyVehicle = {
    type: 'Car',
    year: 2021,
    color: 'Yellow'
};

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};
console.log(myUpdatedVehicle);