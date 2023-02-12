import {
	capitalize,
	reverseString,
	calculator,
	caesar,
	analyseArray
} from './index.js'

// CAPITALIZE
test('Capitalized string', () =>
	expect(capitalize('hello world')).toMatch(/^Hello world$/)
)

test('Capitalized string with punctuation', () =>
	expect(capitalize('&hello world')).toMatch(/^&hello world$/)
)

// REVERSE STRING
test('Reverse string', () =>
	expect(reverseString('abcd')).toMatch(/^dcba$/)
)

test('Unreverse string', () =>
	expect(reverseString('dcba')).toMatch(/^abcd$/)
)

// CALCULATOR
test('Calculator add', () =>
	expect(calculator().add(4, 5)).toBe(9)
)

test('Calculator subtract', () =>
	expect(calculator().subtract(9, 5)).toBe(4)
)

test('Calculator multiply', () =>
	expect(calculator().multiply(4, 5)).toBe(20)
)

test('Calculator divide', () =>
	expect(calculator().divide(36, 9)).toBe(4)
)

// CAESAR
test('Caesar', () =>
	expect(caesar('abcdef', 4)).toBe('efghij')
)

test('Caesar returns same case', () =>
	expect(caesar('abcDEF', 4)).toBe('efgHIJ')
)

test('Caesar wrapping', () =>
	expect(caesar('wxyzab', 4)).toBe('abcdef')
)

test('Caesar puncuation and spaces', () =>
	expect(caesar('$abc def!', 4)).toBe('$efg hij!')
)

test('Caesar shift negative', () =>
	expect(caesar('abcDEF', -4)).toBe('wxyZAB')
)

test('Caesar shift out of range', () =>
	// Same as shift  4
	expect(caesar('abcDEF', 30)).toBe('efgHIJ')
)

test('Caesar shift out of negative range', () =>
	// Same as shift -4
	expect(caesar('abcDEF', -30)).toBe('wxyZAB')
)

test('Caesar shift of 0', () =>
	expect(caesar('abc xyz!', 0)).toBe('abc xyz!')
)

test('Caesar shift of alphabet length', () =>
	expect(caesar('abc xyz!', 26)).toBe('abc xyz!')
)

// ANALYSE ARRAY
test('Analyse Array', () =>
	expect(analyseArray([1,8,3,4,2,6]))
	.toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6
	})
)
