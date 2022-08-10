function factorial(number) {
  console.log("Forward phase", number);

  //Base case
  if (number <=1) {
    console.log("base case", number);
    return 1;
  }

  // Recursive case
  const numberMinusOneFactorial = factorial(number - 1);

  console.log("Backward phase", number, "*", numberMinusOneFactorial);

  return number * numberMinusOneFactorial;
}

console.log(factorial(5));

// This bottom-up recursive function breaks down the problem into increasingly smaller problems until the base case is encountered. 
// Then it combines the solutions in the backward phase. In other words, there are no solutions or calculations until the base case is reached. 
// This is a very common approach in recursive functions.