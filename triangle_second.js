function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
 
function createMatrix(ARR_SIZE) {
    var result = [];
 
    for (var i = 0; i < ARR_SIZE; i++) {
        result[i] = [];
        for (var j = 0; j < ARR_SIZE; j++) {
            result[i][j] = rand(0, 99);
        }
    }
    return result;
}
 var arr = createMatrix(10);
 console.table(arr);

 var border={
 	hypotenuse: [],
 	leg1: arr[0].slice(),
 	leg2: []
 }
 var j=0;
 for(var i=1; i<=arr.length-1; i++){
 	j=i;
 	border.hypotenuse.push(arr[i][j]);
 	
 };
 console.log(border.hypotenuse)
 for(var i=1; i<arr.length-1; i++){
 	border.leg2.push(arr[i][arr[i].length - 1])
 	
 };
 console.log(border.leg2)
 border.hypotenuse.reverse();
 var perimeter= border.hypotenuse.concat(border.leg1,border.leg2);
 console.log(perimeter);
 