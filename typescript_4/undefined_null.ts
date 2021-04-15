// let MyName: string = null; // 에러 발생

// let u: undefined = null; // 에러

// let v: void = void; // 에러 void는 타입으로 만 존재

// let v: void = undefined; 

// let union: string | null = null; // | <- 요게 유니온 타입 합집합의 느낌

// union = "Mark"


let n: null = null;

console.log(n); // null
console.log(typeof n); // object


let u: undefined = undefined;

console.log(u) // undefined
console.log(typeof u); // undefined