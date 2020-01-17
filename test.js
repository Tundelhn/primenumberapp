const primes = require('./primes.js');
const assert = require('assert');
const grid = require('./table.js');

//=========================================
//prime module
//===========================================
describe('Prime Module', function() {
  describe('isPrime function', function() {
    it('There should be an error if it is not given a positive integer', function() {
      assert.throws(primes.isPrime, Error, 'Requires an integer');
      assert.throws(function() {
        primes.isPrime(3.1);
      });
      assert.throws(function() {
        primes.isPrime('a');
      });
      assert.throws(function() {
        primes.isPrime(true);
      });
      assert.throws(function() {
        primes.isPrime(undefined);
      });
    });

    it('test primality', function() {
      assert.equal(primes.isPrime(2), true);
      assert.equal(primes.isPrime(3), true);
      assert.equal(primes.isPrime(4), false);
      assert.equal(primes.isPrime(5), true);
      assert.equal(primes.isPrime(7), true);
      assert.equal(primes.isPrime(9), false);
      assert.equal(primes.isPrime(12), false);
      assert.equal(primes.isPrime(13), true);
      assert.equal(primes.isPrime(15), false);
      assert.equal(primes.isPrime(19), true);
      assert.equal(primes.isPrime(21), false);
      assert.equal(primes.isPrime(23), true);
      assert.equal(primes.isPrime(25), false);
    });
  });

  describe('First N primes function', () => {
    it('spit out  10 numbers if nothing is passed in', () => {
      assert.equal(primes.getPrimes().length, 10);
    });

    it('spits out  N numbers if N is passed in', () => {
      assert.equal(primes.getPrimes(12).length, 12);
      assert.equal(primes.getPrimes(8).length, 8);
    });

    it('should return only prime numbers', () => {
      assert.deepEqual(primes.getPrimes(), [
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29
      ]);
    });

    it(' throws an error if a positive integer is not passed in', () => {
      assert.throws(() => {
        primes.getPrimes(-1);
      });
      assert.throws(() => {
        primes.getPrimes('a');
      });
      assert.throws(() => {
        primes.getPrimes(true);
      });
    });
  });
});

//================================================
//grid nodule
//==================================================

describe('Grid Module', () => {
  it('should display tabular data', () => {
    assert.equal(
      grid.drawTable([
        [1, 10, 100],
        [20, 200, 2000],
        [300, 30, 300]
      ]),
      '  1  10  100\n 20 200 2000\n300  30  300'
    );
  });
});
