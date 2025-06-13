function sum(n1,n2){
    console.log(`${n1} + ${n2} = ${n1+n2}`);
}

const div = function(n1, n2){
    console.log(`${n1} / ${n2} = ${n1 / n2}`);
}

const calc = function(cb, n1, n2){
    cb(n1, n2);
}

//calc((n1,n2) => console.log( n1 > n2? n1 : n2), 10, 20);
const findMax = (n1, n2) => {
    if(n1 > n2){
        console.log(n1);
    }else{
        console.log(n2);
    }
}


calc(sum, 10, 20); // 10 + 20 = 30
calc(div, 10, 2);  // 10 / 2 = 5

calc(function(n1, n2){
    console.log(`${n1} * ${n2} = ${n1 * n2}`);
}, 30, 2); // 30 * 2 = 60

calc(findMax, 10, 20); // 20
