// I-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// @MITASK
// for loop orqali
function getDigits(str: string) {
  let res="";
  for (let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) > 48 && str.charCodeAt(i) < 57) {
      res += str[i]
    }
  }
  return res;
}

const result = getDigits("m14i1t")
console.log(result)
