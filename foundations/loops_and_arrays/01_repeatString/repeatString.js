const repeatString = function(strInput, repeatNum) {
    let strOut = '';
    if (repeatNum < 0) {
        return 'ERROR';
    }

    for (let i =0; i < repeatNum; i++) {
        strOut += strInput;
    }

    return strOut;
};

// Do not edit below this line
module.exports = repeatString;
