function radixSort(arrOfNums) {
  let maxDigitCount = mostDigits(arrOfNums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arrOfNums.length; i++) {
      let digit = getDigit(arrOfNums[i], k);
      digitBuckets[digit].push(arrOfNums[i]);
    }
    arrOfNums = [].concat(...digitBuckets);
  }
  return arrOfNums;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}
module.exports = { radixSort, mostDigits, digitCount, getDigit };
