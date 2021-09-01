function go(goLeft = true) {
  return goLeft ? "left" : "right";
}
// console.log(go(false));

function left() {
  return "Left";
}

function right() {
  return "Right";
}

function go(goLeft = true) {
  return goLeft ? left : right;
}

// console.log(go());
// console.log(typeof go(false));

function outerFunc() {
  const innerFunc = function () {
    return "I am the innerFunc";
  }

  return innerFunc;
}

let firstFunc = outerFunc(); // innerFunc
// console.log(firstFunc)
let secondFunc = firstFunc(); // 'i am the innerfunc
// console.log(secondFunc)
