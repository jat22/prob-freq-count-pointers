// add whatever parameters you deem necessary
function constructNote(msg, lets) {
	let msgMap = freqCounter(msg);
	let letsMap = freqCounter(lets);

	for (let key of msgMap.keys()){
		if(letsMap.get(key) < msgMap.get(key) || !letsMap.get(key)) return false
	}
	return true
}

function freqCounter(str){
	let freq = new Map
	for(let char of str){
		let count = freq.get(char) || 0;
		freq.set(char, count + 1)
	}
	return freq
}

module.exports = constructNote