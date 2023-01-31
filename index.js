// task_1:
(function(){
	
	let number=+(prompt('input number (number < 0 && number is Integer)', ''));

	while(!(number > 0 && Number.isInteger(number))){
		number=+(prompt('input number (number < 0 && number is Integer)', ''));console.log("Incorrect input!")		
	}
	
function factorial(num){
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
	let result=[];
	for(let i = num; i >= 0; i-- ){
		if(num % i == 0){
			result.push(i)
		}
	}
	return result;
}

console.log(`Number:${number}\nFactorial:${factorial(number)}\nSquare:${square(number)}\nisPrime:${isPrime(number)}\nisEven:${isEven(number)}\nDelimeters:${delimeters(number)}`);
	
}())

