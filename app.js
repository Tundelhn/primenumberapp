const primes = require('./primes.js');
const grid = require('./table.js');

let n = Number(process.argv[2]);

//Functions computes the products of primes numbers
function primeProducts(primes) {
  var length = primes.length;

  var products = primes.map(function() {
    return new Array(length);
  });

  primes.forEach(function(prime, index, collection) {
    for (var i = 0; i <= index; i++) {
      products[index][i] = products[i][index] = prime * collection[i];
    }
  });

  return products;
}

//==========================================

//===========================================

function addFirstRowCol(table, primes) {
  // Add the prime numbers to t column of the table
  table.forEach(function(row, index) {
    row.unshift(primes[index]);
  });
  // Add numbers to the top row of the table
  var topRow = primes.map(function(prime) {
    return prime;
  });
  topRow.unshift('');
  table.unshift(topRow);

  return table;
}

let primeList = primes.getPrimes(n);
let products = primeProducts(primeList);
let allRowsCols = addFirstRowCol(products, primeList);

let table = grid.drawTable(allRowsCols);

process.stdout.write(table + '\n');
