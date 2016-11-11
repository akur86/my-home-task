var ARR_SIZE = 10;
	var arrfinal=[];
	var i;
	var j;
for (var i = 0; i < ARR_SIZE; i++) {
    arr[i] = [];
    for (var j = 0; j < ARR_SIZE; j++) {
    	arr[i][j] = rand(0, 99);
    }
}
console.table(arr);
i=0;
for (j=0; j < ARR_SIZE; j++){
	arrfinal.push(arr[i][j]);
	console.log(j)
}
console.log(j)
j=ARR_SIZE-1;
for (i=1; i < ARR_SIZE; i++){
	arrfinal.push(arr[i][j]);
}
i=ARR_SIZE-1;
for (j=ARR_SIZE-2; j>=0; j--){
	arrfinal.push(arr[i][j]);
}
j=0;
for (i=ARR_SIZE-2; i>=1; i--){
	arrfinal.push(arr[i][j]);
}
console.log(arrfinal);