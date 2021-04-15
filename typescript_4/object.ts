const person1 = {name: "Mark", age: 39};

// person1 은 object 타입이 아니고
// { name: string, age: number} 타입


const person2 = Object.create({name: "Mark", age: 39});

const person2 = Object.create(39); // 요런거는 못씀 not primitive type인것만 넣기 가능


