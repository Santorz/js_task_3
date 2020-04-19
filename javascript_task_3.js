function NumStringGen (digit){
	let num_array = [];
	for (let i=1; i<= digit; i++){
		if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
			num_array.push("yu-gi-oh");
		} 
		else if (i % 2 === 0 && i % 3 === 0) {
			num_array.push("yu-gi");
		}
		else if (i % 5 === 0) {
			num_array.push("oh");
		}
		else if (i % 3 === 0) {
			num_array.push("gi");
		}
		else if (i % 2 === 0) {
			num_array.push("yu");
		}
		else{
			num_array.push(i);
		}
	}
	console.log (num_array);
	return (num_array)
}

NumStringGen (100);
NumStringGen (365)

