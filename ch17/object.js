const person1 = { /*person1에 저장되어 있는 건 객체의 주소값*/
    name: '김철수',
    age: 25,
    married: false
};

console.log(typeof person1);
console.log(person1);

console.log(person1.name);
person1.age=30;
console.log(person1.age);
console.log("person1['age']", person1['age']);

person1.job = 'programmer';
console.log(person1);

person1['bloodtype'] = 'O';
console.log(person1);