function add (a, b) {
  return a + b;
};

console.log(add(1, 3));
console.log(add(9, 0));

// add statement
var addStatement = (a,b) => {
  console.log(a+b);
};

addStatement(8,9);

//add expression
var addExpression = (a,b) => a+b;

console.log(addExpression(90,32));
