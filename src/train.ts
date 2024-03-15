// L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// @MITASK

function reverseSentence(str:string) {
  const words = str.split(" ");
  let revSentence = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    let revWord = "";
    for (let j = word.length-1; j>=0;  j--) {
      const element = word[j];
      revWord += element
    }
    revSentence = revSentence + revWord + " " 
  }
  return revSentence
}

const result = reverseSentence("we like coding")
console.log(result)