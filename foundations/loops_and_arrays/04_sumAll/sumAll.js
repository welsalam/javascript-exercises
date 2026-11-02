const sumAll = function (firstBoundary, secondBoundary) {
  if (
    !(typeof firstBoundary === "number" && typeof secondBoundary === "number")
  ) {
    return "ERROR";
  }

  if (firstBoundary < 0 || secondBoundary < 0) {
    return "ERROR";
  }

  let sumOut = 0;
  if (firstBoundary < secondBoundary) {
    for (let i = firstBoundary; i <= secondBoundary; i++) {
      sumOut += i;
    }
  } else {
    for (let i = secondBoundary; i <= firstBoundary; i++) {
      sumOut += i;
    }
  }
  return sumOut;
};

// Do not edit below this line
module.exports = sumAll;
