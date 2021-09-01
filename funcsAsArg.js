function go(goLeft = true, leftFunc, rightFunc) {
  return goLeft ? leftFunc : rightFunc;
}

function left() {
  return "Left";
}

function right() {
  return "Right";
}
// console.log(left)
// console.log(go(false, left, right)());

function whatHappened(fn){// fn = tealogger
  const result =
    "Four nations lived together in harmony but everything changed when the fire nation attacked.";
  fn(result); // teaLogger(result)
}

function teaLogger(text) {
  console.log("LOGGING THE TEA:", text);
}

// whatHappened(teaLogger);

function iCantHearYou(text) {
  console.log("LOGGING LOUDER:", text.toUpperCase());
}

// whatHappened(iCantHearYou);

function saysHi(name) {
  console.log("Hi", name);
}
// console.log(saysHi('shawnee'))

function saysBye(name) {
  console.log("Bye", name);
}

function callsWithName(name, callback) {
  callback(name);
}

callsWithName("Felicia", saysHi);
// callsWithName("Felicia", saysBye);
