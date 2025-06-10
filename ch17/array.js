const myArray = [true, 3.14, 'Hello', {name: '홍길동'}];

console.log('myArray');
console.log('myArray.length', myArray.length);

// 2번 방에 있는 데이터 읽어와서 콘솔에 출력 
console.log('myArray[2]', myArray[2]);
console.log("myArray['2']", myArray['2']);


//array가 찍힐 것 같지만 object가 찍힘. 배열이라는 개념이 없기 때문. 
// 객체로 배열을 구현한 것 뿐.
console.log('typeof myArray: ', typeof myArray); 

myArray[4] = '홍길동';
console.log('myArray', myArray);
console.log('myArray.length', myArray.length);

myArray[6] = '홍길동';
console.log('myArray', myArray);
console.log('myArray.length', myArray.length);
console.log('myArray[5]', myArray[5]); //undefined

// console.log('myArray.5', myArray.5); //숫자 속성은 .으로 접근 불가 대괄호로만 가능 

//배열에 아이템 추가시 push 메소드를 활용한다.
const myArray2 = [];
console.log('myArray2.length', myArray2.length);
myArray2.push('안녕');
myArray2.push(3.14);
myArray2.push(true);
myArray2.push(true);
myArray2.push(false);
myArray2.push({age: 12});
console.log('myArray2', myArray2);
console.log('myArray2.length', myArray2.length);

console.log('마지막 요소 제거');
const pop = myArray2.pop(); //마지막 요소 제거 
console.log('pop', pop);
console.log('myArray2', myArray2);
console.log('myArray2.length', myArray2.length);

console.log('1번방부터 단 하나 제거');
myArray2.splice(1, 1); //1번방부터 단 하나 제거
console.log('myArray2', myArray2);
console.log('myArray2.length', myArray2.length);
