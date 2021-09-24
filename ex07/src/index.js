function largestNumFromArr(arr) {
    var maxNumArray = [];
    var max = 0;
  
    for (var i = 0; i < arr.length; i++) {
      max = arr[i][0];
      for (var j = 0; j < arr[i].length; j++) {
        if (max < arr[i][j]) {
          max = arr[i][j];
        }
      }
      maxNumArray.push(max);
    }
  
    return maxNumArray;
  }
  console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log(largestNumFromArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
  console.log(largestNumFromArr([[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10]]));
  module.exports = largestNumFromArr;