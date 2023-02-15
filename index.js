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
//t2
class listNode{
	constructor(value,next=null){
		this.value=value;
		this.next=next;
	}
}
class LinkedList{
	constructor(){
		this.head=null;
		this.tail=null;
	}	
	append(value){
		const newNode=new listNode(value);
		if(!this.head || !this.tail){
			this.head=newNode;
			this.tail=newNode;
			return this;
		}
		this.tail.next=newNode;
		this.tail=newNode;
		return this;
	}
	prepend(value){
		const newNode=new listNode(value,this.head);
		this.head=newNode;
		if(!this.tail){
			this.tail=newNode;
		}
		return this;
	}
	find(value){
		if(!this.head){
			return null;
		}
		let current=this.head;
		while(current){
			if(current.value===value){
				return current;
			}
			current=current.next;
		}
		return null;
	}
	toArray(){
		const res=[];
		let current=this.head;
		while(current){
			res.push(current);
			current=current.next;
		}
		return res;
	}
}

//t3