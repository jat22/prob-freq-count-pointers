// add whatever parameters you deem necessary
function averagePair(arr, target) {
	if(arr.length < 1) return false;

	let start = 0;
	let end = arr.length - 1;

	while(start < end){
		let avg = (arr[start] + arr[end]) / 2;
		if(avg === target) return true;
		if(avg > target) end--;
		else start++;
		console.log(start, end)
	}
	return false
}

module.exports = averagePair