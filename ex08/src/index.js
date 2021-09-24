// Only change code below this line
function myMutation(arr) {
    var firstString = arr[0].toLowerCase();
    var secondString = arr[1].toLowerCase();
  
    for (var i = 0; i < secondString.length; i++) {
      for (var j = 0; j < firstString.length; j++) {
        if (secondString[i] === firstString[j]) {
          break;
        }
        if (j === firstString.length - 1) {
          return false;
        }
      }
    }
    return true;
  }
  // Only change code above this line
  console.log(myMutation(["hello", "hey"])); // Change this line
  console.log(myMutation(["hello", "Hello"]));
  console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
  console.log(myMutation(["Mary", "Army"]));
  console.log(myMutation(["Mary", "Aarmy"]));
  console.log(myMutation(["Alien", "line"]));
  console.log(myMutation(["floor", "for"]));
  console.log(myMutation(["hello", "neo"]));
  console.log(myMutation(["voodoo", "no"]));
  console.log(myMutation(["ate", "date"]));
  console.log(myMutation(["Tiger", "Zebra"]));
  console.log(myMutation(["Noel", "Ole"]));
  
  module.exports = myMutation;
  