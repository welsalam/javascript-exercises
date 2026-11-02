const removeFromArray = function (arrInput) {
  let arrOut = [];
  let arrIn = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    for (let x = 0; x < arrIn.length; x++) {
      if (arrIn[x] != arguments[i]) {
        if (!arrOut.includes(arrIn[x])) {
          arrOut.push(arrIn[x]);
        }
      }
    }
  }
  return arrOut;
};

// Do not edit below this line
module.exports = removeFromArray;
