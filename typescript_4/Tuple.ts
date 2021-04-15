let x: [string, number]; 

// 배열이랑 비슷해 보일수도 있는데 
// 배열은 약간 데이터가 무작위일때의 느낌이고
// 튜플은 길이 그리고 타입이 순서가 정해져 있을때 사용


x = ['hello', 39]
x = [39, 'hello'] // 오류

x[2] = "world"; // 2즉 3번째는 값할당 불가능 위에 두개만 할당했으니깐

const person: [string, number] = ["Mark", 39]

const [first, second] = person; 
//  first: string
//  second: number

const [first, second, third] = person; 
// third는 길이 오류 3번째 값은 없어서
