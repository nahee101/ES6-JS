console.log('Hello World');

/* for 문 */
for(var i=0; i<3; i++) {
    console.log(i);
};
console.log(i);

/* JS 객체 */
let user = {
    name: 'John',
    age: 30
};
/* 함수 프로토타입 */
function User(name, age) {
    this.name = name;
    this.age = age;
};
/* 함수로 생성한 객체 (인스턴스) */
let user1 = new User('Jane', 28);
console.log(user);
console.log(user1);
/* 클래스로 생성한 객체 */
class Car {
    //클래스에서 속성 값을 할당할 때 사용하는 메소드
    constructor(name) {
        this.brand = name;
    };
    //메소드는 동일하게 작성
    printbrand() {
        console.log(this.brand);
    };
};

let myCar = new Car('Ford');
myCar.printbrand();

class UserName {
    constructor(name) {
        //setter 활성화
        this.name = name;
    };
    get name() {
        return this._name + '님';
    };
    set name(value) {
        if(value.length < 3) {
            console.log('이름이 너무 짧습니다.')
            return;
        };
        this._name = value;
        console.log(this.name)
    };
};

let userName1 = new UserName('보라');
let userName2 = new UserName('김보라');

/* 클래스의 상속 */
//부모 클래스 생성
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    };
    run(speed) {
        this.speed = speed;
        console.log(`${this.name}은/는 속도 ${this.speed}로 달립니다.`);
    };
    stop() {
        this.speed = 0;
        console.log(`${this.name}이/가 멈췄습니다.`);
    };
}

//extends를 이용해서 상속받는 자식 클래스
class Rabbit extends Animal {
    constructor(name, earLength) {
        //부모 클래스에서 받아온 속성값을 super()를 이용해 생성
        super(name);
        //추가된 속성은 this를 이용하여 생성
        this.earLength = earLength;
    };
    hide() {
        console.log(`${this.name}이/가 숨었습니다.`);
    };
    //부모 클래스에 있는 stop 메소드를 오버라이딩
    stop() {
        //부모에 있는 stop을 가져와서 출력 - super 키워드 사용
        super.stop();
        //자기 자신에 있는 hide를 가져와서 출력 - this 키워드 사용
        this.hide();
    };
};

let rabbit = new Rabbit('흰 토끼', 10);
rabbit.run(10); //부모 클래스의 메소드 사용
rabbit.hide(); //자식 클래스의 메소드 사용
rabbit.stop(); //자식 클래스에서 오버라이딩한 메소드가 출력
console.log(rabbit.earLength);