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
    left: [],
    bottom: arr[arr.length - 1].slice(),
    right: [],
    top: [] 
};
for (var i = 0; i < arr.length - 1; i++) {
    border.left.push(arr[i][0]);
 
    border.right.push(
        arr[i][arr[i].length - 1]
    );
}

i=0
for (j=1; j < arr.length-1; j++){
    border.top.push(arr[i][j]);
    
}
 border.right.reverse();
 border.top.reverse()

var perimeter = border.left.concat(border.bottom, border.right, border.top);
console.log(perimeter);