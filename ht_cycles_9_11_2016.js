 function rand (min,max){
		return Math.floor(Math.random()*(max-min))+min;
	}
var arr=[];
var num1=rand(-100,100);
var c;
var b;
for (var i = 0; i < 30; i++){
	 num1=rand(-100,100);
	 c=i%2;
	 while(((num1>0&&c==0)||(num1<0&&c==1))==false){
	 	num1=rand(-100,100);
	 };
	 arr.push(num1)
};
console.log("Искомый массив:   "+(arr));
for (var i = 4; i < 30; i+=5) {
	b=i+1;
    console.log ((b)+ "-й элемент:   "+ (arr[i]));
};