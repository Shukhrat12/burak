// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// @MITASK

function objectToArray(obj: any) {
  return Object.entries(obj)
}

const result = objectToArray({a: 10, b: 20});
console.log(result)