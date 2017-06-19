/*jshint esversion: 6*/
/*
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  let newSum = 0;
  let a = 0;
  let b = 1;
  for(let i = 0; i < maxFibValue; i = sum){
    sum = a + b;
    a = b;
    b = sum;
      if(sum % 2 === 0){
        newSum += sum;
      }


  }
  // do your work here

  return newSum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
