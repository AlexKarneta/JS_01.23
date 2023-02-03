function makeDeepCopy(obj){	
	let reg=/^\s*$/ ;
	if(obj.match(reg) || !Object.keys(obj).length){
		throw new Error();
	}
	let dublicate = {};
		
		for(const i in obj) {
		  if (obj[i] instanceof Object && !(obj[i] instanceof Array)) {
			dublicate[i] = makeDeepCopy(obj[i]);
			continue;
		  }else{
			dublicate[i] = obj[i];
		  }		  
		}
		return dublicate;	 
}

function selectFromInterval(arr,startIndex,endIndex){
	if (!Array.isArray(arr) || !isFinite(startIndex) || !isFinite(endIndex) || arr.length === 0) {
		throw new Error()
	}

	if(arr.every((item)=>typeof(item) =='number')){
	let res=[startIndex, endIndex];
	res.sort((a,b)=>a-b)	
	let start=res[0],end=res[1];

	let result=[]
	for(let item of arr){
		if(item>=start && item <=end){
			result.push(item)
		}
	}
	return result;
	}else throw Error();	
}

function createIterable(){}