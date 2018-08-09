const greekNumber = num => {
	const greekNums = {
		1: 'α',
		2: 'β',
		3: 'γ',
		4: 'δ',
		5: 'ε',
		6: 'ϛ',
		7: 'ζ',
		8: 'η',
		9: 'θ',
		10: 'ι',
		20: 'κ',
		30: 'λ',
		40: 'μ',
		50: 'ν',
		60: 'ξ',
		70: 'ο',
		80: 'π',
		90: 'Ϟ',
		100: 'ρ',
		200: 'σ',
		300: 'τ',
		400: 'υ',
		500: 'φ',
		600: 'χ',
		700: 'ψ',
		800: 'ω',
		900: 'Ϡ',
	};

	if (num === 0) return 'οὐδὲν';

	let result = '';
	let remainder = num.toString();

	if (remainder.length > 5) {
		let current = remainder.slice(0, -4);
		remainder = remainder.slice(-4);
		let more = greekNumber(Number(current));
		result += more.slice(0, -1) + 'M';
	}

	switch (remainder.length) {
		case 5:
			let tenThousand = remainder.slice(0, 1) * 10;
			remainder = remainder.slice(1);
			result += `͵${greekNums[tenThousand]}`;
		case 4:
			let thousand = remainder.slice(0, 1);
			remainder = remainder.slice(1);
			if (thousand !== '0' && result[result.length - 2] === '͵')
				result += `${greekNums[thousand]}`;
			else if (thousand !== '0') result += `͵${greekNums[thousand]}`;
		case 3:
			let hundred = remainder.slice(0, 1) * 100;
			remainder = remainder.slice(1);
			if (hundred) result += greekNums[hundred];
		case 2:
			let ten = remainder.slice(0, 1) * 10;
			remainder = remainder.slice(1);
			if (ten) result += greekNums[ten];
		case 1:
			if (remainder === '0') break;
			let one = remainder.slice(0, 1);
			result += greekNums[one];
	}

	return result + '΄';
};

const noCommas = str => str.split(',').join('');

let input = prompt(
	'This program will render a positive integer\nin Greek numerals.\nPlease enter a number.',
	''
);

let numeral = greekNumber(Number(noCommas(input)));
alert(numeral);
