# testing-practice

## Description
TOP - Testing Practice project  

Practise Test Driven Development using Jest by writing tests, then creating functions to make them pass.

## Project Requirements
https://www.theodinproject.com/lessons/node-path-javascript-testing-practice

Write tests for the following, then make the tests pass:

1) A capitalize function that takes a string and returns it with the first character capitalized.

2) A reverseString function that takes a string and returns it reversed.

3) A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

4) A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.

5) An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

## Script output: `npm test`
	> test
	> jest

	PASS  src/index.test.js
		✓ Capitalized string (2 ms)
		✓ Capitalized string with punctuation (3 ms)
		✓ Reverse string
		✓ Unreverse string (1 ms)
		✓ Calculator add
		✓ Calculator subtract
		✓ Calculator multiply
		✓ Calculator divide
		✓ Caesar
		✓ Caesar returns same case
		✓ Caesar wrapping
		✓ Caesar puncuation and spaces
		✓ Caesar shift negative
		✓ Caesar shift out of range
		✓ Caesar shift out of negative range
		✓ Caesar shift of 0 (1 ms)
		✓ Caesar shift of alphabet length
		✓ Analyse Array (1 ms)

	Test Suites: 1 passed, 1 total
	Tests:       18 passed, 18 total
	Snapshots:   0 total
	Time:        0.381 s, estimated 1 s
	Ran all test suites.
