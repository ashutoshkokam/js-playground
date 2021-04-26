function play() {
  console.log("JS Playground");
}
function print(obj) {
  console.log(JSON.stringify(obj));
}

var obj = { firstName: "Ashutosh", lastName: "Kokam" };

var obj2 = { lastName: "Kokam", firstName: "Ashutosh" };

console.log(obj == obj2); //false
console.log(JSON.stringify(obj) === JSON.stringify(obj2)); //true if properties are in same order
//false, if properties are NOT in same order

console.log("1" == 1); //true
console.log("1" === 1); //false

//setTimeout(play, 5000);
function outest() {
  let k = 30;
  return function outer() {
    let i = 10;
    return function inner() {
      let j = 20;
      console.log(i + j + k);
    };
  };
}
var outer = outest();
var innerFunc = outer();
innerFunc(); //innerfunc have access to outer functions variables

for (var index = 1; index <= 5; index++) {
  function printIndex(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  printIndex(index);
}
