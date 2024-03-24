// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// @MITASK

function hasProperty(obj: Object, str: string) {
  const keys = Object.keys(obj)
  return (keys.includes(str)) 
}

const result = hasProperty({name: "BMW", model: "M3"}, "model")
console.log(result)