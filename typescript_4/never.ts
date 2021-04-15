function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('failed');
}

function infiniteLoop(): never {
  while(true) {}
}

let a: string = "hello";

if (typeof a !== 'string') {
  a;  // a가 string인데 조건이 string이 아니면 이기때문에 never
}

declare const a: string | number;

if (typeof a !== 'string') {
  a;  // a타입은 number
}

type Indexable<T> = T extends string ? T & {[index: string]: any} : never
// T가 스트립이면 T를  {[index: string]: any}로 만들어서 보내고 아니면 never
type ObjectIndexable = Indexable<{}> // never
const b: Indexable<{}> = ''// 오류
