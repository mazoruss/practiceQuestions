// merge meetings

var merge = (meetings) => {
	var result = [];
	meetings.forEach(meeting => {
		if (!result.length) result.push(meeting);
		else {
			var i = 0;
			while (result[i] && meeting[0] >= result[i][0]) {
				i++;
			}
			var prev = result[i - 1 ];
			var next = result[i];
			var merged = false;
			if (prev) {
				if (prev[1] >= meeting[0]) {
					prev[1] = Math.max(meeting[1], prev[1]);
					merged = true;
				}
			}
			if (next) {
				if (merged && prev[1] >= next[0]) {
					prev[1] = Math.max(next[1], prev[1]);
				}
				else if (next[0] <= meeting[1]) {
					next[0] = Math.min(next[0], meeting[0]);
					merged = true;
				}
			}
			if (!merged) {
				result.splice(i, 0, meeting);
			}
		}
	})
	return result;
}

console.log(merge([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ]));
console.log(merge([[1, 2], [2, 3]]));
console.log(merge([[1, 10], [2, 6], [3, 5], [7, 9]]));
