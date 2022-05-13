/* 클래스 실습 1 */
class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    sayHi() {
        console.log(`반갑습니다. ${this.name}입니다.`);
    };
};

let userHi = new UserClass('홍길동', 30);
userHi.sayHi();

/* 클래스 실습 2 */
class Dog {
    constructor(family, name, age) {
        this.family = family;
        this.name = name;
        this.age = age;
    };
    getName() {
        return this.name;
    };
    setName(name) {
        this.name = name;
    };
    sayHiDog() {
        console.log(`${this.family}인 ${this.name}입니다.`);
    };
};

let myDog = new Dog('진돗개', '백구', 1);
myDog.sayHiDog();
myDog.setName('마루');
console.log(myDog.getName());

/* get, set 실습 1 */
class yourDog {
    constructor(family, name) {
        this.family = family;
        this.name = name;
    };
    sayHiDog() {
        console.log(`${this.family}인 ${this.name}입니다.`);
    };    
    get name() {
        return this._name;
    };
    set name(value) {
        if(value == '') {
            console.log('이름을 입력해 주세요');
            return;
        };
        this._name = value;
        this.sayHiDog();
    };
};

let dog1 = new yourDog('시베리안허스키', '');
let dog2 = new yourDog('푸들', '보리');

/* 클래스 상속 실습 1 */
//UserClass 상속받는 Student 클래스 작성
class Student extends UserClass {
    constructor(name, major) {
        //부모 클래스에서 받아온 name
        super(name);
        //추가된 속성 major
        this.major = major;
    };
    study() {
        console.log(`${this.major}를 공부합니다.`);
    };
    sayHi() {
        console.log(`${this.major}를 공부하는 학생 ${this.name}입니다.`);
    };
};

let student = new Student('메리', '수학');
student.study();
student.sayHi();

/* 클래스 상속 실습 2 */
class HouseDog extends Dog {
    constructor(family, name, address) {
        //부모 클래스에서 받아온 family, name
        super(family, name);
        //추가 속성 address
        this.address = address;
    };
    sayAddress() {
        console.log(`${this.address}에 살아요.`)
    }
};

let myHouseDog = new HouseDog('말티즈', '연탄', '부산');
myHouseDog.sayHiDog();
myHouseDog.sayAddress();


