declare const maybe: unknown;


const aNumber: number = maybe; // unknown은 바로 할당 불가

if (maybe === true) {
  maybe; // true 타입이됨 
  const aBoolean: boolean = maybe; // 그래서 이게 가능

  const aString: string = maybe; // 위에서 maybe가 boolean이므로 string은 안됨
}

if (typeof maybe === 'string') { // typeof 타입가드
  maybe // maybe는 string 타입이 됨
  const aString: string = maybe // maybe는 string 타입이여서 가능

  const aBoolean: boolean = maybe; // 오류
}