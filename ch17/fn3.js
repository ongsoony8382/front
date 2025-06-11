//fn3.js
//  화살표 함수 Arrow Function

const sum = (n1, n2) => {
    console.log('sum메소드 호출!!');
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
    return ; 
}
// const sum = (n1,n2) => n1 + n2;

const result = sum(10,30);
// const result = undefined; 
console.log('result: ', result);

// 생략가능한 것: return, 중괄호, 소괄호 
// 소괄호 생략 가능, 파라미터가 하나일 때
const abs = val => {
    return val < 0? -val : val;
}

//중괄호 생략 가능 ( 코드가 한 줄 일 때)
const abs2 = val => console.log('val: ', val < 0 ? -val : val);

console.log('abs: ', abs(-10));
console.log('abs: ', abs(11));

// return 생략 가능, 코드가 한 줄일 때 (중괄호도 없어야 함. )

const ab3 = val =>  val < 0? -val : val ; 
