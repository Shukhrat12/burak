// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

//with for loop
// function getPositive(array: Array<number>) {
//     let res="";
//     for (let index = 0; index < array.length; index++) {

//         const element = array[index];

//         if (element>0) {
           
//             res += String(element);
//         }
       
//     }
//     return res
// }

// const res = getPositive([1, -4, 2]);
// console.log(res)

// with array iteration methods
function getPositive(array: Array<number>) {
   return array.filter((ele) => ele > 0 ? ele : null ).join("")
}

const res = getPositive([1, -4, 2]);
console.log(res)
