// task_1:
(function(){	
	let number=+(prompt('input number (number >= 0 && number is Integer)', ''));

	while(!(number >= 0 && Number.isInteger(number))){
		number=+(prompt('input number (number < 0 && number is Integer)', ''));
		console.log("Incorrect input!")		
	}
	
function factorial(num){
	if (num === 0) { 
		return 1;
	}
	return (num != 1) ? num * factorial(num - 1 ) : 1;
}

function square(num){
	return num * num;
}

function isPrime(num){
	for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
		if(num % i === 0) return false;
  }  
  return num > 1;
}

function isEven(num){
	return num % 2 === 0;
}

function delimeters(num){
	if(num === 0) {
		return 0;
	}
	let result=[];
	for(let i = num; i >= 0; i-- ){
		if(num % i == 0){
			result.push(i)
		}
	}
	return result;
}

console.log(`Number:${number}\nFactorial:${factorial(number)}\nSquare:${square(number)}\nisPrime:${isPrime(number)}\nisEven:${isEven(number)}\nDelimeters:${delimeters(number)}`);	
}());

// task_2:
(function (){
	let value = prompt('input symbols (1 < symbols <= 3)','');
	
	while(!(value.length <= 3 && value.length > 0 && !checkSpaces(value))){
		value = prompt('input symbols (1 < symbols <= 3)','');
		console.log("Incorrect input!");
	}
	
	let number=+(prompt('input number (number > 0 && number < 10 && number is Integer )', ''));

	while(!(number > 0 &&  number < 10 && Number.isInteger(number))){
		number=+(prompt('input number (number < 0 && number is Integer)', ''));
		console.log("Incorrect input!");
	}

	let arr=[number];
	for(let i=0;i<number;i++){
		arr[i]=new Array
	}
	for(let i=0;i<number;i++){
		for(let j=0;j<number;j++){
			arr[i][j]=value;
		}
	}

	function checkSpaces(val){
		return /^\s*$/.test(val);
	}

	const print = arr.map((d) => d.join(" ")).join("\n");

	console.log(print);	
}());
