
// add whatever parameters you deem necessary
function countPairs(arr, target) {
	let count = 0;
	const srtArr = arr.sort((a,b) => a-b)

	let left = 0;
	let right = arr.length - 1;

	while(left < right){
		if(srtArr[left] + srtArr[right] === target) {
			count++;
			right--;
			left++
		}
		if(srtArr[left] + srtArr[right] > target) right--;
		if(srtArr[left] + srtArr[right] < target) left++;
	}
	return count
}

module.exports = countPairs