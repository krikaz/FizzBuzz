const router = require('express').Router();

function fizzbuzz(body) {
	const { int1, int2, limit, str1, str2 } = body;
	let result = '';

	for (let i = 1; i < limit; i++) {
		if (i % int1 === 0 && i % int2 === 0) {
			result += str1 + str2 + ', ';
		} else if (i % int1 === 0) {
			result += str1 + ', ';
		} else if (i % int2 === 0) {
			result += str2 + ', ';
		} else {
			result += i.toString() + ', ';
		}
	}
	return result;
}

router.post('/', async (req, res) => {
	fizzbuzz(req.body)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(error => res.status(500).send(error));
});
