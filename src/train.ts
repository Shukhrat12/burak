// J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// @MITASK

function findLongestWord(str: string) {
  let arr = str.split(" ")
  let longestWord = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element.length > longestWord.length) {
      longestWord = element
    }
  }
  return longestWord
}

const longestWord =  findLongestWord("I come from Uzbekistan")
console.log(longestWord)
