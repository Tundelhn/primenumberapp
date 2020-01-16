// This function will return the first n inputs
exports.getPrimes = x => {
  x = x || 10;
  var primes = [];
  var counter = 0;
  var current = 2;

  if (typeof x !== 'number' || x <= 0 || x % 1 !== 0) {
    throw new Error('positive integer required');
  }

  while (counter < x) {
    if (exports.isPrime(current)) {
      primes.push(current);
      counter++;
    }
    current++;
  }

  return primes;
};

// this function test if number is a prime
exports.isPrime = number => {
  if (typeof number !== 'number' || number % 1 !== 0) {
    throw new Error('Number should be an integer');
  }

  let result = true;
  if (number < 2 || (number > 2 && number % 2 === 0)) {
    result = false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        result = false;
        break;
      }
    }
  }
  return result;
};
