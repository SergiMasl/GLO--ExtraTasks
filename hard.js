let arr = ["33", "41", "21", "32", "12", "24", "10"];

for (let i = 0; i < arr.length; i++) {
  let arrElem = arr[i];
  let startingTwo = arrElem.indexOf("2") == 0;
  let startingFour = arrElem.indexOf("4") == 0;

  if (startingTwo || startingFour) {
    console.log(arrElem);
  }
}

/// 2
let isSimpleNumber = function (n) {
  let massOfNumbers = [];
  for (let x = 1; x <= n; x++) {
    let leftEl = n % x;
    if (leftEl === 0) {
      massOfNumbers.push(leftEl);
    }
  }
  if (massOfNumbers.length === 2) {
    return true;
  } else {
    return false;
  }
};

for (let n = 0; n <= 100; n++) {
  if (isSimpleNumber(n) === true) {
    console.log(n, `Делители этого числа: 1 и ${n}`);
  }
}
