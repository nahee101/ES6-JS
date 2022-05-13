/* 화살표 함수 1 */
let sum = (a, b) => a + b;
console.log('화살표 함수 ' + sum(1, 2));

/* 선언적 함수 */
function sumFunction(a, b) {
    return a+b;
};
console.log('선언적 함수 ' + sumFunction(1, 2));

/* 화살표 함수 실습 2 */
const words = [
    'spray', 'limit', 'elite', 'exuberant', 
    'destruction', 'present'
]
const result = words.filter(word => word.length <= 6 );
console.log(result);