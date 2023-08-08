// add whatever parameters you deem necessary
function isSubsequence(lets, str) {
	let strPointer = 0;
	let letsPointer = 0;

	while(strPointer < str.length){
		if(lets[letsPointer] !== str[strPointer]) strPointer++
		if(lets[letsPointer] === str[strPointer]){
			letsPointer++;
			strPointer++
		}
		if(letsPointer > lets.length - 1) return true
	}
	return false
}

module.exports = isSubsequence