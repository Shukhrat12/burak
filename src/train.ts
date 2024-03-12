// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// @MITASK

const vowels = 'aeiouy'

function countVowels(str: string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if(vowels.split("").includes(element)) {
      count++
    }
  }
  return count;
}

const count = countVowels("string")
console.log(count)