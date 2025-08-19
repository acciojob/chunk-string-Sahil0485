function stringChop(str, size) {
  // your code here
	let chunks = [];
	let i=0;
	while(i<str.length){
		let subStr = str.slice(i, i+size);
		chunks.push(subStr);
		i+=size;
	}
	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
