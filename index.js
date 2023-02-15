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
class Car{
	#brand = '';
	#model = '';
	#yearOfManufacturing = 1950;
	#maxSpeed = 100;
	#maxFuelVolume = 20;
	#fuelConsumption = 1;
	#damage = 1;
	#currentFuelVolume = 0;
	#isStarted = false;
	#mileage = 0;
	#health = 100;

	get brand() {
		return this.#brand;
	}
	get model() {
		return this.#model;
	}
	get yearOfManufacturing() {
		return this.#yearOfManufacturing;
	}
	get maxSpeed() {
		return this.#maxSpeed;
	}
	get maxFuelVolume() {
		return this.#maxFuelVolume;
	}
	get fuelConsumption() {
		return this.#fuelConsumption;
	}
	get damage() {
		return this.#damage;
	}
	get currentFuelVolume() {
		return this.#currentFuelVolume;
	}
	get isStarted() {
		return this.#isStarted;
	}
	get mileage() {
		return this.#mileage;
	}
	get health() {
		return this.#health;
	}  
	set brand(brand){
		if(!brand || brand.length>50 || typeof brand !== 'string'){
			throw new Error('Invalid brand name');
		}
		this.#brand=brand;
		
	}
	set model(model){
		if(!model || model.length>50 || typeof model !== 'string'){
			throw new Error('Invalid model name');
		}
		this.#model=model;
		
	}
	set yearOfManufacturing(year){
		if(!Number.isFinite(year) || year < 1950 || year > 2023){
			throw new Error('Invalid year of manufacturing');
		}
		this.#yearOfManufacturing=year;
		
	}
	set maxSpeed(maxSpeed){
		if (!Number.isFinite(maxSpeed) || maxSpeed < 100 || maxSpeed > 330) {
			throw new Error('Invalid max speed');
		}
		this.#maxSpeed = maxSpeed;
	}
	set maxFuelVolume(maxFuelVolume){
		if (!Number.isFinite(maxFuelVolume) || maxFuelVolume < 20 || maxFuelVolume > 100) {
			throw new Error('Invalid max fuel volume');
		}
		this.#maxFuelVolume = maxFuelVolume;
	}
	set fuelConsumption(fuelConsumption){
		if (!Number.isFinite(fuelConsumption) || fuelConsumption < 0) {
			throw new Error('Invalid fuel consumption');
		}
		this.#fuelConsumption = fuelConsumption;
	}
	set damage(damage){
		if(!Number.isFinite(damage) || damage < 1 || damage > 5){
			throw new Error('Invalid damage');
		}
		this.#damage=damage;
	}
	start(){
		if(this.#isStarted){
			throw new Error('Car has already started');
		}
		this.#isStarted=true;
	}
	shutDownEngine(){
		if(!this.#isStarted){
			throw new Error('Car hasn\'t started yet');
		}
		this.#isStarted=false;
	}
	fillUpGasTank(gas){
		if (!Number.isFinite(gas) || gas <= 0) {
			throw new Error('Invalid fuel amount');
		}
		if (this.#isStarted) {
			throw new Error('You have to shut down your car first');
		}
		if (this.#currentFuelVolume + gas > this.#maxFuelVolume) {
			throw new Error('Too much fuel');
		}
		this.#currentFuelVolume = this.#currentFuelVolume + gas;
	}
	drive(speed, hours){
		if (!Number.isFinite(speed) || speed <= 0) {
			throw new Error('Invalid speed');
		}
		if (!Number.isFinite(hours) || hours <= 0) {
			throw new Error('Invalid duration');
		}
		if (speed > this.#maxSpeed) {
			throw new Error('Car can\'t go this fast');
		}
		if (!this.#isStarted) {
			throw new Error('You have to start your car first');
		}

		const GASCHECK = () => {
			return this.#currentFuelVolume - (this.#fuelConsumption / 100 * speed * hours);
		};
		if (this.#currentFuelVolume === 0 || GASCHECK() < 0) {
			throw new Error('You don\'t have enough fuel');
		}
		this.#currentFuelVolume = GASCHECK();
		const HEALTHCHECK = () => {
			return this.#health - (this.#damage / 100 * speed * hours);
		};
		if (this.#health === 0 || HEALTHCHECK() <= 0) {
			throw new Error('Your car won’t make it');
		}
		this.#health = HEALTHCHECK();
		const MILEAGECHECK = () => {
			return this.#mileage + speed * hours;
		};
		this.#mileage = MILEAGECHECK();
	}
	repair(){
		if (this.#isStarted) {
			throw new Error('You have to shut down your car first');
		}
		if (this.#currentFuelVolume === this.#maxFuelVolume) {
			throw new Error('You have to fill up your gas tank first');
		}
		this.#health = 100;
	}
	getFullAmount(){
		return this.#currentFuelVolume === this.#maxFuelVolume ? 0: this.#maxFuelVolume - this.#currentFuelVolume;
	}
}