export function capitalize (string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export function reverseString (string) {
	return string.split('').reverse().join('')
}

export function calculator () {
	return {
		add: (x, y) => x + y,
		subtract: (x, y) => x - y,
		multiply: (x, y) => x * y,
		divide: (x, y) => x / y
	}
}

export function caesar (text, shift) {
	shift %= shift >= 0 ? 26 : -26

	function getRange (code) {
		const [A, Z, a, z] = [65, 90, 97, 122]
		if (code >= A && code <= Z) return [A, Z]
		else if (code >= a && code <= z) return [a, z]
		else return []
	}

	function getCipherLetter (letter) {
		let code = letter.charCodeAt(0)
		const [A, Z] = getRange(code)
		if (!A) return letter

		code += shift
		if (code > Z) code = A + (code - Z) - 1
		else if (code < A) code = Z - (A - code) + 1
		return String.fromCharCode(code)
	}

	return text.split('').map(letter => getCipherLetter(letter)).join('')
}

export function analyseArray (array) {
	return {
		average: array.reduce((total, current) => total + current) / array.length,
		min: array.sort()[0],
		max: array.sort()[array.length - 1],
		length: array.length
	}
}
