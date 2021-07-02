export const rows = (count) => {
	let prev = [],
		cur = [],
		ans = [];
	if (!count) return [];
	for (let i = 1; i <= count; i++) {
		for (let j = 1; j < i - 1; j++) {
			cur.push(prev[j] + prev[j - 1]);
		}
		cur.push(1);
		ans.push(cur);
		prev = cur;
		cur = [1];
	}
	return ans;
};
