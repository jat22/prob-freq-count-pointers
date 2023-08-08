// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
	const numStr1 = num1.toString()
	const numStr2 = num2.toString()

	if(numStr1.length !== numStr2.length) return false

	const numFreq1 = freq(numStr1);
	const numFreq2 = freq(numStr2);

	for(let key in numFreq1){
		if(numFreq1[key] !== numFreq2[key]) return false
	}
	return true
}

function freq(str){
	const freq = {};
	for(digit of str){
		if(freq[digit]) freq[digit]++;
		else freq[digit] = 1
	}

	return freq
}

module.exports = sameFrequency