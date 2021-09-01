function whatHappened(fn) {
  // fn = tealogger
  const result =
    "Four nations lived together in harmony but everything changed when the fire nation attacked.";
  fn(result); // teaLogger(result)
}

function teaLogger(text) {
  console.log("LOGGING THE TEA:", text);
}


let first = function whatHappened() {

  return (text) => {
    return text;
  };
}


// console.log(whatHappened("Four nations lived together in harmony but everything changed when the fire nation attacked."));

// console.log(first()("Four nations lived together in harmony but everything changed when the fire nation attacked."))


function transform(text, fn) {
    if (typeof fn !== "function") {
      return text;
    }
  
    return fn(text);
  }

function capitalize(string){
    return string.toUpperCase();
}

console.log(transform('left', capitalize))

// "left" -> "LEFT"
// "RiGhT" -> "right"
// "left right left" -> "left-right-left"
// "up Down left" -> "UDL"