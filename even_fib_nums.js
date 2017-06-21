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
  fibCurrent = 0;
  let fibOld = 0;
  let fibNew = 1;
  for(let i = 0; i < maxFibValue; i = fibCurrent){
    fibCurrent = fibOld + fibNew;
    fibOld = fibNew;
    fibNew = fibCurrent;
      if( fibCurrent % 2 === 0){
        sum += fibCurrent;
      }

  }
  // do your work here

  return sum;
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

