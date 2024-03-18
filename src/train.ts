// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// @MITASK

//Using For loop

// function palindromCheck(str: string) {
//   let rev = ""
//   for (let i = str.length-1; i >= 0; i--) {
//     const ele = str[i];
//     rev += ele
//   }
//   if (rev === str) {
//     return true
//   } else {
//     return false
//   }
// }

// using iteration methods

function palindromCheck(str: string) {
  let rev = ""
  str.split("").reverse().map((ele) => rev += ele)
  return rev === str ? true : false
}

const result = palindromCheck("madam")
console.log(result)