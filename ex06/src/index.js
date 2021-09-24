function multiplyArrayFunction(myArray) {
    var arr = [];
    var product = 1;
    var sum = 0;
  
    for (var i = 0; i < myArray.length; i++) {
      for (var j = 0; j < myArray[i].length; j++) {
        product *= myArray[i][j];
        sum += myArray[i][j];
      }
    }
    arr.push(product, sum);
  
    return arr;
  }
  
  console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]])); 
  console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
  console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]));
  module.exports = multiplyArrayFunction;