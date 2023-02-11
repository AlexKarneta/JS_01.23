function curry(cb) {
	return function curried(...args) {
	  if (args.length >= cb.length) {
		 return cb.apply(this, args);
	  } else {
		 return function(...args2) {
			return curried.apply(this, args.concat(args2));
		 }
	  }
	}; 
 }

 class Calculator{
	constructor(x,y){
		if(validNumber(x) && validNumber(y)){
			this.x=x;
			this.y=y;
		}else{
			throw new Error();
		}		
	}

	setX(x){
		if(validNumber(x)){
			this.x=x;
		}else{
			throw new Error();
		}		
	};
	setY(y){
		if(validNumber(y)){
			this.y=y;
		}else{
			throw new Error();
		}		
	}
	getSum(){
		return this.x + this.y;
	}
	getMul(){
		return this.x * this.y;
	}
	getSub(){
		return this.x - this.y;
	}
	getDiv(){
		if(this.y === 0){
			throw new Error()
		}
		return this.x / this.y;
	}
 }
 function validNumber(number){
	return typeof number ==='number' && isFinite(number);
 }