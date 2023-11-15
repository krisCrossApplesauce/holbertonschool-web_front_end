function countPrimeNumbers() {
	let i, ii, x, n = 0;

	for (i = 2; i <= 100; i++) {
		x = 0;

		for (ii = 2; ii < i && x == 0; ii++) {
			if (i % ii == 0) {
				x = 1;
			}
		}

		if (x == 0) {
			n++;
		}
	}

	return (n);
}

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
