export const squareRoot = (number) => {
	let left = 0,
		right = number / 2,
		mid;
	while (left <= right) {
		mid = Math.floor(left + (right - left) / 2);
		if (mid * mid === number) return mid;
		if (mid * mid < number) left = mid + 1;
		else right = mid - 1;
	}
	return 1;
};
