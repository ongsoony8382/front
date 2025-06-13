function sum(n1,n2){
    console.log(`${n1} + ${n2} = ${n1+n2}`);
}

sum(10,20);

const fn1 = sum; //주소값 복사. fn1로도 sum을 호출할 수 있고, sum으로도 sum을 호출 가능.
fn1(20,30); // 함수 주소값을 알면 함수를 호출할 수 있다,

const div = function(n1, n2){
    console.log(`${n1} / ${n2} = ${n1 / n2}`);
} // 함수의 주소값이 복사가 돼서 div에 들어갔다.

div(10,2);