class Stack{
	constructor(stackLength=10){		
		this.stackLength=stackLength;
		this.arr=[];
	}
	push(elem){
		let len=this.arr.length;
		if(len<this.stackLength){
			this.arr[len]=elem;
		}else throw new Error('Limit exceeded');		
	}
	pop(){
		if(this.arr.length){
			let element=this.arr[this.arr.length-1];

			delete this.arr[this.arr.length-1];
			this.arr.length--;
			return element;
		}else{
			throw new Error('Empty stack');
		}
	}
	peek(){		
		return this.arr.length?this.arr[this.arr.length-1]:null;		
	}
	isEmpty(){
		return this.arr.length?true:false;
	}
	toArray(){
		let res=[];
		for(let i=0;i<this.arr.length;i++){
			res[i]=this.arr[i];
		}
		return res;
	}

	showArr(){
		return this.arr;
	}
}