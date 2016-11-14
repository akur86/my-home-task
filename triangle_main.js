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
 
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
 
 var border = {
     top: arr[0].slice(),
     left: [],
     right: []
 };
 j=0;
 
 for (var i = arr.length-2; i >=1; i--) {
     border.left.push(arr[i][0]); 
}
var k=arr.length-1;
for (var i=1; i<=arr.length-1; i++) {
     border.right.push(arr[i][k-=1]);
     }
var perimeter = border.top.concat(border.right,border.left);
console.log(perimeter);