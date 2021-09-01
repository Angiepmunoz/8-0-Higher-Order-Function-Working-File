const arrayOfNum = [1,2,3,4,5,6,7];
const stringVal = 'I am string';
const arrayOfObj = [{},{},{}];

function sayHello(){
    console.log('Hello!');
}

const helloArr = []; 

helloArr.push(sayHello);
helloArr.push(sayHello);
helloArr.push(sayHello);

// console.log(helloArr);

for(let i = 0; i < helloArr.length; i++){
    let element = helloArr[i];
    element();
}
console.log(helloArr);
//declarative function
function happyFunc(){
    console.log('I am happy');
}
console.log(happyFunc());
//expression 
const happyFunction = function (){
    console.log("I'm still happy");
}
console.log(happyFunction())

const happier = () => {
    console.log("I am even happier")
}

console.log(happier())
