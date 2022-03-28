function solution(arr) {
  // Set 생성자 함수는 Set 객체를 생성해 값의 중복 없이 값을 저장한다.
  // 1. new Set(arr) => Set {중복 값 없는 값}
  // 2. ... spread syntax
  // 3. []
  let uniqueArr = [...new Set(arr)];
  return uniqueArr.length;
}

let mySet = new Set();

console.log(mySet.add(1));
console.log(mySet.add(1));
console.log(mySet.add(2));
console.log(...mySet);
console.log([...mySet]);
