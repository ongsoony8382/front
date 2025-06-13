//이것은 배열임
const arr = [10, 20, 30, 40];
console.log('length: ', arr.length);

// forEach 함수는 콜백함수 하나를 인자로 받음. 

let sum = 0;

// arr.forEach(item => sum2 += item);
arr.forEach(function(item, idx){ //item은 10, 20, 30, 40 이고 idx는 0,1,2,3임
    console.log(`item: ${item}, idx: ${idx}`);
    sum += item;
    
    

}); 

console.log(sum);



//이것은 유사 배열임.
// 기본적으로 forEach는 없음 → 직접 구현해야 함
const myArr = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    length: 5, 
    forEach: function(cb){ /*forEach 메서드를 직접 만들어준 것.

        cb는 콜백 함수로,
        
        this[i]는 각 요소 (10, 20, ...)
        
        i는 인덱스 (0, 1, ...)
        
        즉, 진짜 배열처럼 작동하게 만들어줌.*/
        
        for(let i = 0; i<this.length; i++){
            cb(this[i], i);
        }

    }
};

console.log('my-length: ', myArr.length);
myArr.forEach(function(item, idx){ 
    console.log(`item: ${item}, idx: ${idx}`);

}); 

