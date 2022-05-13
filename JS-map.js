/* map*/
const array1 = [1, 4, 9, 16];

//map: 배열의 요소를 가져와서 결과(return) 값을 배열로 반환한다.
const map1 = array1.map((x) => x*2);

//return 값이 없을 경우 undefined 값이 출력된다.
const map2 = array1.map((x) => {
    x*2;
})
console.log(map1);
console.log(map2);

/* map 실습 1 */
const num = [1, 16, 49, 121];
const sqrt_map = num.map((x) => Math.sqrt(x));
console.log(sqrt_map);