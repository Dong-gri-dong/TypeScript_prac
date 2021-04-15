// function returnAny(message): any {
//   console.log(message)
// } 

// const any1 = returnAny('리턴은 아무거나');

// any1.toString(); // 실제로는 undefined지만 오류는 안남


// function returnAny(message): any {
//   console.log(message)
// } // 이걸


// function returnAny(message:any): any {
//   console.log(message)
// } // 요걸로 바꿔줘야함


let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d; 
// 이렇게 까지 해도 실제로는 오류가 나는데 컴파일 단계에서 오류가 안남 
// 그래서 any를 쓸때 조심해야함

function leakingAny(obj: any) {
  // const a = obj.num; // 이것을 
  const a: number = obj.num; // 요렇게 바꿔서 누수를 막아줘야함
  const b = a + 1; // b가 any가 됨
  return b
}

const c = leakingAny({num: 0}) //c도 any가 됨
c.indexOf("0"); // 누수를 안막으면 오류 안남






