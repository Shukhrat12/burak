// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// @MITASK

function calculate(str: string) {
  let sum: number = 0;
  
  const arr = str.split("+").map((val) => sum += Number(val))
  return sum;
}

const result = calculate("1+3")
console.log(result)