let list = [1, 2, 3]; // number[] 타입

// 타입은 써주는게 좋음
let list: number[] = [1, 2, 3] // 이렇게
let list: Array<number> = [1, 2, 3] // 두가지 가능


let list: (number | string)[] = [1, 2, 3, "4"];
let list: Array<number | string> = [1, 2, 3, "4"];
